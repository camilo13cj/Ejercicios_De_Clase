package com.example.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.model.ContactFormUiState
import com.example.model.ContactSubmission
import com.example.model.FormErrors
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class ContactFormViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(ContactFormUiState())
    val uiState: StateFlow<ContactFormUiState> = _uiState.asStateFlow()

    companion object {
        // Regex pattern matching HTML5 email input pattern: [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
        private val EMAIL_REGEX = Regex("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
        // International phone format E.164: optional +, country code [1-9], followed by 1 to 14 digits
        private val PHONE_REGEX = Regex("^\\+?[1-9]\\d{1,14}$")
    }

    fun onNameChanged(newName: String) {
        _uiState.update { current ->
            val updated = current.copy(name = newName)
            if (current.hasSubmittedOnce) {
                updated.copy(errors = validate(updated))
            } else {
                updated
            }
        }
    }

    fun onEmailChanged(newEmail: String) {
        _uiState.update { current ->
            val updated = current.copy(email = newEmail)
            if (current.hasSubmittedOnce) {
                updated.copy(errors = validate(updated))
            } else {
                updated
            }
        }
    }

    fun onPhoneChanged(newPhone: String) {
        _uiState.update { current ->
            val updated = current.copy(phone = newPhone)
            if (current.hasSubmittedOnce) {
                updated.copy(errors = validate(updated))
            } else {
                updated
            }
        }
    }

    fun onMessageChanged(newMessage: String) {
        _uiState.update { current ->
            val updated = current.copy(message = newMessage)
            if (current.hasSubmittedOnce) {
                updated.copy(errors = validate(updated))
            } else {
                updated
            }
        }
    }

    fun onPrivacyToggled(accepted: Boolean) {
        _uiState.update { current ->
            val updated = current.copy(isPrivacyAccepted = accepted)
            if (current.hasSubmittedOnce) {
                updated.copy(errors = validate(updated))
            } else {
                updated
            }
        }
    }

    fun openPrivacyPolicy() {
        _uiState.update { it.copy(showPrivacyPolicyDialog = true) }
    }

    fun closePrivacyPolicy(accepted: Boolean? = null) {
        _uiState.update { current ->
            val newAccepted = accepted ?: current.isPrivacyAccepted
            val updated = current.copy(
                showPrivacyPolicyDialog = false,
                isPrivacyAccepted = newAccepted
            )
            if (current.hasSubmittedOnce) {
                updated.copy(errors = validate(updated))
            } else {
                updated
            }
        }
    }

    fun dismissSuccessDialog() {
        _uiState.update { it.copy(showSuccessDialog = false) }
    }

    fun resetForm() {
        _uiState.update {
            ContactFormUiState()
        }
    }

    private fun validate(state: ContactFormUiState): FormErrors {
        val nameTrimmed = state.name.trim()
        val nameError = if (nameTrimmed.isEmpty()) {
            "El nombre completo es obligatorio."
        } else {
            null
        }

        val emailTrimmed = state.email.trim()
        val emailError = when {
            emailTrimmed.isEmpty() -> "El correo electrónico es obligatorio."
            !EMAIL_REGEX.matches(emailTrimmed) -> "Por favor, introduce un email válido (ejemplo@dominio.com)."
            else -> null
        }

        val phoneTrimmed = state.phone.trim()
        val phoneCleaned = phoneTrimmed.replace(Regex("[\\s\\-\\(\\)]"), "")
        val phoneError = if (phoneCleaned.isNotEmpty() && !PHONE_REGEX.matches(phoneCleaned)) {
            "Formato internacional: + seguido del código de país y el número (ej. +34 600 000 000)."
        } else {
            null
        }

        val messageTrimmed = state.message.trim()
        val messageError = when {
            messageTrimmed.isEmpty() -> "El mensaje es obligatorio."
            messageTrimmed.length < 10 -> "El mensaje debe tener al menos 10 caracteres (faltan ${10 - messageTrimmed.length})."
            else -> null
        }

        val privacyError = if (!state.isPrivacyAccepted) {
            "Debes aceptar la política de privacidad para continuar."
        } else {
            null
        }

        return FormErrors(
            nameError = nameError,
            emailError = emailError,
            phoneError = phoneError,
            messageError = messageError,
            privacyError = privacyError
        )
    }

    fun submitForm() {
        val currentState = _uiState.value
        val validationErrors = validate(currentState)

        if (validationErrors.hasErrors) {
            _uiState.update {
                it.copy(
                    hasSubmittedOnce = true,
                    errors = validationErrors
                )
            }
            return
        }

        // All fields are valid -> process submission
        _uiState.update {
            it.copy(
                isSubmitting = true,
                hasSubmittedOnce = true,
                errors = FormErrors()
            )
        }

        viewModelScope.launch {
            delay(750) // User feedback delay
            val timeFormatter = SimpleDateFormat("dd/MM/yyyy HH:mm", Locale.getDefault())
            val submission = ContactSubmission(
                name = currentState.name.trim(),
                email = currentState.email.trim(),
                phone = currentState.phone.trim().ifEmpty { "No especificado" },
                message = currentState.message.trim(),
                submittedAtFormatted = timeFormatter.format(Date())
            )

            _uiState.update {
                it.copy(
                    isSubmitting = false,
                    showSuccessDialog = true,
                    submittedData = submission
                )
            }
        }
    }
}

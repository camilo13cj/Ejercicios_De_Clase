package com.example.model

data class ContactSubmission(
    val name: String,
    val email: String,
    val phone: String,
    val message: String,
    val submittedAtFormatted: String
)

data class FormErrors(
    val nameError: String? = null,
    val emailError: String? = null,
    val phoneError: String? = null,
    val messageError: String? = null,
    val privacyError: String? = null
) {
    val hasErrors: Boolean
        get() = nameError != null ||
                emailError != null ||
                phoneError != null ||
                messageError != null ||
                privacyError != null
}

data class ContactFormUiState(
    val name: String = "",
    val email: String = "",
    val phone: String = "",
    val message: String = "",
    val isPrivacyAccepted: Boolean = false,
    val isSubmitting: Boolean = false,
    val hasSubmittedOnce: Boolean = false,
    val errors: FormErrors = FormErrors(),
    val submittedData: ContactSubmission? = null,
    val showSuccessDialog: Boolean = false,
    val showPrivacyPolicyDialog: Boolean = false
)

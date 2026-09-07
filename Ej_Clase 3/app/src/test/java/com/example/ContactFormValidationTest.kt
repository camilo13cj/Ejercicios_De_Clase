package com.example

import com.example.viewmodel.ContactFormViewModel
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test

class ContactFormValidationTest {

    private lateinit var viewModel: ContactFormViewModel

    @Before
    fun setUp() {
        viewModel = ContactFormViewModel()
    }

    @Test
    fun `empty submission triggers all required field errors`() {
        viewModel.submitForm()
        val state = viewModel.uiState.value

        assertTrue(state.hasSubmittedOnce)
        assertNotNull(state.errors.nameError)
        assertNotNull(state.errors.emailError)
        assertNotNull(state.errors.messageError)
        assertNotNull(state.errors.privacyError)
        // Phone is optional, so it should not have an error when empty
        assertNull(state.errors.phoneError)
    }

    @Test
    fun `invalid email pattern produces specific error`() {
        viewModel.onNameChanged("Carlos Sánchez")
        viewModel.onEmailChanged("correo-invalido")
        viewModel.onMessageChanged("Este es un mensaje con más de diez caracteres")
        viewModel.onPrivacyToggled(true)

        viewModel.submitForm()
        val state = viewModel.uiState.value

        assertNull(state.errors.nameError)
        assertNotNull(state.errors.emailError)
        assertNull(state.errors.messageError)
        assertNull(state.errors.privacyError)
    }

    @Test
    fun `invalid international phone produces error`() {
        viewModel.onNameChanged("Carlos Sánchez")
        viewModel.onEmailChanged("carlos@example.com")
        viewModel.onPhoneChanged("+01234567890123456789") // invalid format (>15 digits or 0 country code)
        viewModel.onMessageChanged("Mensaje con longitud suficiente para pasar la prueba")
        viewModel.onPrivacyToggled(true)

        viewModel.submitForm()
        val state = viewModel.uiState.value

        assertNotNull(state.errors.phoneError)
    }

    @Test
    fun `valid international phone succeeds`() {
        viewModel.onNameChanged("Carlos Sánchez")
        viewModel.onEmailChanged("carlos@example.com")
        viewModel.onPhoneChanged("+34 600 000 000")
        viewModel.onMessageChanged("Mensaje con longitud suficiente para pasar la prueba")
        viewModel.onPrivacyToggled(true)

        viewModel.submitForm()
        val state = viewModel.uiState.value

        assertNull(state.errors.phoneError)
        assertFalse(state.errors.hasErrors)
    }

    @Test
    fun `short message fails minimum length check`() {
        viewModel.onNameChanged("Carlos Sánchez")
        viewModel.onEmailChanged("carlos@example.com")
        viewModel.onMessageChanged("Corto") // 5 characters < 10
        viewModel.onPrivacyToggled(true)

        viewModel.submitForm()
        val state = viewModel.uiState.value

        assertNotNull(state.errors.messageError)
    }

    @Test
    fun `resetForm clears all fields and errors`() {
        viewModel.onNameChanged("Carlos")
        viewModel.submitForm()
        viewModel.resetForm()

        val state = viewModel.uiState.value
        assertEquals("", state.name)
        assertEquals("", state.email)
        assertEquals("", state.phone)
        assertEquals("", state.message)
        assertFalse(state.isPrivacyAccepted)
        assertFalse(state.hasSubmittedOnce)
        assertFalse(state.errors.hasErrors)
    }
}

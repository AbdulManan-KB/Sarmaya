:root {
    --primary-green: #2E8B57;
    --primary-blue: #1E90FF;
    --secondary-blue: #4682B4;
    --light-green: #98FB98;
    --white: #ffffff;
    --black: #000000;
    --error-red: #f44336;
    --success-green: #4CAF50;
    --gray-light: #f5f5f5;
    --gray-medium: #e0e0e0;
    --gray-dark: #666;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Nastaliq Urdu', serif;
    line-height: 1.6;
    background-color: var(--gray-light);
}

/* Header and Navigation */
.header {
    background-color: var(--white);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    max-width: 1200px;
    margin: 0 auto;
}

.logo-img {
    height: 50px;
}

.nav-links a {
    color: var(--primary-blue);
    text-decoration: none;
    margin-right: 2rem;
    font-weight: bold;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-green);
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow-y: auto;
    padding: 20px 0;
}

.modal-content {
    background-color: var(--white);
    margin: 20px auto;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 600px;
    position: relative;
}

.close-modal {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: var(--gray-dark);
}

/* Form Styles */
.application-form {
    margin-top: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--gray-medium);
    border-radius: 5px;
    font-size: 16px;
    font-family: inherit;
}

.form-group textarea {
    height: 100px;
    resize: vertical;
}

.checkbox-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.checkbox-group input[type="checkbox"] {
    width: auto;
}

/* Button Styles */
.apply-now,
.submit-btn,
.cancel-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
}

.apply-now,
.submit-btn {
    background-color: var(--primary-green);
    color: var(--white);
}

.cancel-btn {
    background-color: var(--gray-light);
    color: var(--gray-dark);
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

/* Message Styles */
.message {
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: bold;
}

.success-message {
    background-color: var(--success-green);
    color: var(--white);
}

.error-message {
    background-color: var(--error-red);
    color: var(--white);
}

/* Loading State */
.loading {
    position: relative;
    pointer-events: none;
}

.loading::after {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 3px solid var(--gray-light);
    border-top: 3px solid var(--primary-green);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 1001;
}

@keyframes spin {
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .modal-content {
        margin: 10px auto;
        padding: 1.5rem;
        width: 95%;
    }

    .form-actions {
        flex-direction: column;
    }

    .form-actions button {
        width: 100%;
    }

    .nav-links {
        display: none;
    }
}

/* Additional Styles */
.hero-section {
    padding-top: 80px;
    text-align: center;
    background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
    color: var(--white);
    padding: 8rem 2rem 4rem;
}

.features-section,
.loan-details-section {
    padding: 4rem 2rem;
    background: var(--white);
}

.contact-section {
    background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
    color: var(--white);
    padding: 4rem 2rem;
    text-align: center;
}

.footer {
    background: var(--black);
    color: var(--white);
    text-align: center;
    padding: 1rem;
                          }

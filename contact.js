// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Create email subject
            const subject = encodeURIComponent(`Contact Form Inquiry from ${data.name}`);

            // Create email body
            const emailBody = encodeURIComponent(`New Contact Form Submission

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}

Message:
${data.message}

---
This form was submitted from the Volunteer Patchwork website.

Please reply to: ${data.email}`);

            // Create mailto link with both email addresses (both owners will receive the email)
            const emailAddresses = 'charles@volunteerpatchwork.com,leslie@volunteerpatchwork.com';
            const mailtoLink = `mailto:${emailAddresses}?subject=${subject}&body=${emailBody}`;

            // Open email client with both owners in the "To" field
            window.location.href = mailtoLink;

            // Display success message
            formMessage.textContent = 'Opening your email client... Your message will be sent to both owners. If your email client doesn\'t open, please email us directly at charles@volunteerpatchwork.com and leslie@volunteerpatchwork.com';
            formMessage.className = 'form-message success';

            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }
});


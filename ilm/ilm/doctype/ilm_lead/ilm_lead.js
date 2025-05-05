// Copyright (c) 2025, Ashar Shamsudheen and contributors
// For license information, please see license.txt

// frappe.ui.form.on("ILM Lead", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('ILM Lead', {
    refresh: function(frm) {
        if (frm.doc.contact_no && frappe.user.has_role('ILM Admin')) {
            frm.add_custom_button('WhatsApp Chat', () => {
                // Clean and format the number
                let number = frm.doc.contact_no.replace(/[^+\d]/g, '');
                number = number.replace('+', '');

                const message = encodeURIComponent('hello'); // Customize if needed
                const url = `https://wa.me/${number}?text=${message}`;

                window.open(url, '_blank');
            });
        }
    }
});

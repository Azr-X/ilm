// Copyright (c) 2025, Ashar Shamsudheen and contributors
// For license information, please see license.txt

// frappe.ui.form.on("ILM Student", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('ILM Student', {
    refresh: function(frm) {
        if (frm.doc.contact && frappe.user.has_role('ILM Admin')) {
            frm.add_custom_button('WhatsApp Chat', () => {
                // Clean and format the number
                let number = frm.doc.contact.replace(/[^0-9]/g, '');

                if (!number || number.length < 10) {
                    frappe.msgprint(__('Invalid contact number'));
                    return;
                }

                const message = encodeURIComponent('Hello'); // Customize if needed
                const url = `https://wa.me/${number}?text=${message}`;

                window.open(url, '_blank');
            });
        }
    }
});

frappe.ui.form.on('ILM Student Qualification', {
    degree__program_name: function(frm, cdt, cdn) {
        // Automatically save parent 'Student' form when qualification_level is changed
        //change document_attachment to mandatory for this row
        frm.save();
    }
});

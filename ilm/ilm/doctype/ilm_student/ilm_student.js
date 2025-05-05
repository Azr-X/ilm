// Copyright (c) 2025, Ashar Shamsudheen and contributors
// For license information, please see license.txt

frappe.ui.form.on('ILM Student', {
    refresh: function(frm) {
        if (frappe.user.has_role('ILM Admin')) {
            // WhatsApp Chat button
            if (frm.doc.contact) {
                frm.add_custom_button('WhatsApp Chat', () => {
                    let number = frm.doc.contact.replace(/\D/g, '');

                    // Basic length validation (customize as per your region)
                    if (number.length < 10 || number.length > 15) {
                        frappe.msgprint(__('Invalid contact number'));
                        return;
                    }

                    const message = encodeURIComponent('Hello');
                    const wa_url = `https://wa.me/${number}?text=${message}`;
                    window.open(wa_url, '_blank');
                });
            }

            // Create Sales Invoice button
            frm.add_custom_button('Create Sales Invoice', () => {
                frappe.new_doc('Sales Invoice', {
                    customer: frm.doc.name,
                    custom_ilm_student: frm.doc.name
                });
            });
        }
    }
});

frappe.ui.form.on('ILM Student Qualification', {
    degree__program_name: function(frm, cdt, cdn) {
        // Auto-save parent form
        frm.save();
    }
});

# Copyright (c) 2025, Ashar Shamsudheen and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ILMStudent(Document):
    def after_insert(self):
        # Check if a customer already exists for this student
        if not frappe.db.exists("Customer", {"custom_ilm_student": self.name}):
            customer = frappe.get_doc({
                "doctype": "Customer",
                "customer_name": self.name1,
                "customer_type": "Individual",
                "custom_ilm_student": self.name  # Correct field name
            })
            customer.insert(ignore_permissions=True)
            frappe.msgprint(f"Customer {customer.name} created for student {self.name1}")

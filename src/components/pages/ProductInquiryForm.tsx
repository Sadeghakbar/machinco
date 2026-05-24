"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { FormPrivacyConsent } from "@/components/forms/FormPrivacyConsent";
import type { MachineDetailContent } from "@/content/machines";
import type { Locale } from "@/i18n/config";

type ProductInquiryFormProps = {
  locale: Locale;
  content: MachineDetailContent;
};

export function ProductInquiryForm({ locale, content }: ProductInquiryFormProps) {
  const { productForm } = content;
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") === "viewing" ? "viewing" : "quote";

  const initialMessage = useMemo(
    () => (intent === "viewing" ? productForm.viewingMessage : productForm.defaultMessage),
    [intent, productForm.defaultMessage, productForm.viewingMessage]
  );

  useEffect(() => {
    if (window.location.hash === "#product-inquiry" || searchParams.get("intent")) {
      document.getElementById("product-inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  const formSubject = intent === "viewing" ? productForm.viewingSubject : productForm.subject;

  return (
    <div id="product-inquiry" className="content-card product-inquiry-form">
      <h3>{productForm.title}</h3>
      <p className="product-inquiry-intro">{productForm.intro}</p>

      <form id={productForm.formId} method="post" action="https://api.web3forms.com/submit">
        <input type="hidden" name="access_key" value="9565bb1b-bb34-4c9e-951c-8338d01f9774" />
        <input type="hidden" name="subject" value={formSubject} />
        <input type="hidden" name="from_name" value="Machinco Website" />
        <input type="hidden" name="product" value={productForm.productName} />
        <input type="hidden" name="product_slug" value={content.slug} />
        <input type="hidden" name="inquiry_type" value={intent} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="form-group">
          <label className="product-inquiry-label" htmlFor={`${productForm.formId}-product`}>
            {productForm.productFieldLabel}
          </label>
          <input
            id={`${productForm.formId}-product`}
            type="text"
            className="form-control"
            value={productForm.productName}
            readOnly
          />
        </div>

        <div className="row">
          <div className="col-sm-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder={productForm.fields.name}
              required
            />
          </div>
          <div className="col-sm-6 form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder={productForm.fields.email}
              required
            />
          </div>
          <div className="col-sm-6 form-group">
            <input type="text" name="phone" className="form-control" placeholder={productForm.fields.phone} />
          </div>
          <div className="col-sm-6 form-group">
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder={productForm.fields.company}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            key={intent}
            name="message"
            className="form-control"
            rows={6}
            placeholder={productForm.fields.message}
            defaultValue={initialMessage}
            required
          />
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" required />{" "}
            <FormPrivacyConsent locale={locale} copy={productForm.privacyConsent} />
          </label>
        </div>

        <button type="submit" className="btn show">
          {productForm.submitLabel}
        </button>
      </form>
    </div>
  );
}

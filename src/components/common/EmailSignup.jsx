import { useState } from "react";

export default function EmailSignup({ context = "default" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // TODO: Add Mailchimp form action URL from siteConfig
  const formAction = "#";

  return (
    <div className="email-signup">
      <h4 className="email-signup__title">GET DROP ALERTS</h4>
      <form
        action={formAction}
        method="post"
        target="_blank"
        className="email-signup__form"
      >
        <input
          type="text"
          name="NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
          required
          className="email-signup__input"
        />
        <input
          type="email"
          name="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="email-signup__input"
        />
        <input type="hidden" name="CONTEXT" value={context} />
        <button type="submit" className="email-signup__button">
          SUBSCRIBE
        </button>
      </form>
      <p className="email-signup__disclaimer">
        We'll only email you about new updates. No spam, ever. Unsubscribe
        whenever.
      </p>
    </div>
  );
}

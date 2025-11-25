"use client";
import { useResponsiveContainer } from "@/app/hooks/useResponsiveContainer";

export default function PrivacyPage() {
  const { getContainerClass } = useResponsiveContainer();

  return (
    <div className={getContainerClass()}>
      <article className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="h1_title">Privacy Policy</h1>
        <p className="text-white/60 mb-8">Last updated: November 25, 2025</p>

        <div className="space-y-6 text-white/80">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>When you sign in with Google OAuth, we collect:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your profile picture (if provided)</li>
            </ul>
            <p className="mt-3">
              Additionally, when you use our service, we collect:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Posts and content you create</li>
              <li>Tags and metadata associated with your posts</li>
              <li>Likes and interactions with other users' content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide and maintain our service</li>
              <li>Identify you as the author of your posts</li>
              <li>Enable social features like likes and comments</li>
              <li>Communicate with you about your account</li>
              <li>Improve and optimize our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              3. Data Storage and Security
            </h2>
            <p>
              Your data is stored securely in our MongoDB database. We implement
              appropriate security measures to protect against unauthorized
              access, alteration, disclosure, or destruction of your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              4. Third-Party Services
            </h2>
            <p>
              We use Google OAuth for authentication. When you sign in with
              Google, you are also subject to Google's Privacy Policy. We do not
              have access to your Google password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              5. Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. Your public posts, name, and profile picture are visible
              to other users of the platform. Your email address is kept
              private.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              7. Cookies and Tracking
            </h2>
            <p>
              We use session cookies for authentication purposes through
              NextAuth.js. These cookies are essential for the functioning of
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              8. Children's Privacy
            </h2>
            <p>
              Our service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify users of any material changes by posting the new Privacy
              Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us through our platform or via the contact information
              provided on our website.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-white/60 text-sm">
            By using Share AI Prompts, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>
      </article>
    </div>
  );
}

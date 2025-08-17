import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, Gavel, CreditCard, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-2xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using NutriAI.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    By downloading, installing, or using the NutriAI mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our App.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and NutriAI Inc. ("Company", "we", "us", or "our") regarding your use of the App and related services.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">User Accounts</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Account Creation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must be at least 13 years old to create an account</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining account security</li>
                    <li>One account per person is allowed</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Account Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Keep your login credentials confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>You are liable for all activities under your account</li>
                    <li>Update your information when it changes</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Acceptable Use</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>You agree to use NutriAI only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Upload inappropriate, offensive, or copyrighted content</li>
                    <li>Attempt to reverse engineer or hack the App</li>
                    <li>Use the App for commercial purposes without permission</li>
                    <li>Share false or misleading nutritional information</li>
                    <li>Interfere with other users' experience</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Health Disclaimer</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <p className="font-semibold text-yellow-800 mb-2">Important Health Notice</p>
                    <p className="text-yellow-700">
                      NutriAI is designed for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers regarding your diet and health decisions.
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Calorie calculations are estimates and may not be 100% accurate</li>
                    <li>Individual nutritional needs vary based on many factors</li>
                    <li>The App is not intended to diagnose or treat medical conditions</li>
                    <li>Consult healthcare professionals for specific dietary requirements</li>
                    <li>We are not liable for health decisions based on App information</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Subscription & Payments</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Premium Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Some features require a paid subscription</li>
                    <li>Subscription fees are charged in advance</li>
                    <li>Prices may change with 30 days notice</li>
                    <li>No refunds for partial subscription periods</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Cancellation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancel anytime through your device's app store</li>
                    <li>Cancellation takes effect at the end of current billing period</li>
                    <li>You retain access to premium features until expiration</li>
                    <li>No partial refunds for early cancellation</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Gavel className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Our Rights</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>NutriAI owns all rights to the App and its content</li>
                    <li>Our AI algorithms and technology are proprietary</li>
                    <li>Trademarks and logos are protected intellectual property</li>
                    <li>You may not copy, modify, or distribute our content</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Your Content</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You retain ownership of photos and content you upload</li>
                    <li>You grant us license to use your content for App functionality</li>
                    <li>We may use anonymized data to improve our services</li>
                    <li>You can delete your content at any time</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    To the maximum extent permitted by law, NutriAI Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Health issues arising from App use</li>
                    <li>Inaccurate nutritional information</li>
                    <li>Service interruptions or technical issues</li>
                    <li>Third-party actions or content</li>
                  </ul>
                  <p className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700">
                    <strong>Maximum Liability:</strong> Our total liability to you shall not exceed the amount you paid for the App in the 12 months preceding the claim.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We may terminate or suspend your account immediately, without prior notice, for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violation of these Terms</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Abuse of our services or other users</li>
                    <li>Non-payment of subscription fees</li>
                  </ul>
                  <p>Upon termination, your right to use the App ceases immediately, and we may delete your account and data.</p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Gavel className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in San Francisco, California.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>For questions about these Terms, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>Email:</strong> legal@nutriai.com</p>
                    <p><strong>Address:</strong> NutriAI Inc., 123 Health Street, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or in-app notification. Continued use of the App after changes constitutes acceptance of the new Terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
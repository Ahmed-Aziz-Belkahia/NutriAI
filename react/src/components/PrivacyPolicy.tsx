import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  <p>When you create an account with NutriAI, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email address and account credentials</li>
                    <li>Profile information (name, age, dietary preferences)</li>
                    <li>Health and fitness goals</li>
                    <li>Contact information for customer support</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-6">Usage Data</h3>
                  <p>We automatically collect information about how you use our app:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Food photos and nutritional analysis results</li>
                    <li>App usage patterns and feature interactions</li>
                    <li>Device information (model, operating system, app version)</li>
                    <li>Log data (IP address, access times, pages viewed)</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use the collected information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate calorie counting and nutritional analysis</li>
                    <li>Generate personalized meal recommendations</li>
                    <li>Improve our AI recognition algorithms</li>
                    <li>Send you important app updates and notifications</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Analyze usage patterns to enhance app functionality</li>
                    <li>Ensure app security and prevent fraudulent activity</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We implement industry-standard security measures to protect your data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Secure cloud storage with regular backups</li>
                    <li>Multi-factor authentication for account access</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Limited access to personal data by authorized personnel only</li>
                  </ul>
                  <p className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <strong>Important:</strong> Your food photos are processed locally on your device when possible, and any data sent to our servers is immediately deleted after analysis.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Sharing</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only in these limited circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Trusted partners who help us operate our app (cloud hosting, analytics)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and users' safety</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly agree to share data with third parties</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>You have the following rights regarding your personal data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                    <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                  <p>To exercise these rights, contact us at <a href="mailto:privacy@nutriai.com" className="text-emerald-600 hover:text-emerald-700">privacy@nutriai.com</a></p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Mail className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>Email:</strong> privacy@nutriai.com</p>
                    <p><strong>Address:</strong> NutriAI Inc., 123 Health Street, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
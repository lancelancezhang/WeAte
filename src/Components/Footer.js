import React from "react";

export default function Footer() {
  return (
    <footer class="bg-white border-t border-gray-300">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="text-center text-gray-700">
          <p>&copy; 2025 We Ate. All Rights Reserved.</p>
          <div class="mt-4">
            <ul class="flex justify-center space-x-6">
              <li>
                <a href="/about" class="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" class="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" class="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

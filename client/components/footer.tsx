import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">CollegeMarket</h3>
            <p className="mt-2 text-sm text-gray-600">
              The marketplace for college students.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Contact</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} CollegeMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
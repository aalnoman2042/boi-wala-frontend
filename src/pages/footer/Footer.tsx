import logo from "../../../public/images/footer_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#4c7a6f] text-white p-8 text-center">
      <div className="flex flex-col items-center justify-center space-y-3">
        {/* Logo */}
        <img
          src={logo}
          alt="BOI-WALA Logo"
          className="max-h-40 md:h-40 w-auto object-contain "
        />

        {/* Brand Text */}
        <p className="text-lg font-bold">BOI-WALA</p>
        <p className="text-sm">
          Providing reliable library service since 2010
        </p>

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} — All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mt-4">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.317C0 23.4.6 24 1.342 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.097 2.797.141v3.24h-1.918c-1.505 0-1.796.715-1.796 1.762v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.658V1.342C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.832 9.832 0 01-2.828.775A4.932 4.932 0 0023.337 3.2a9.865 9.865 0 01-3.127 1.195 4.924 4.924 0 00-8.384 4.482 13.978 13.978 0 01-10.15-5.15A4.822 4.822 0 002.92 9.72a4.903 4.903 0 01-2.229-.616v.062a4.928 4.928 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.935 4.935 0 004.604 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.213c9.058 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="hover:text-gray-200 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.957 2.957 0 00-2.08-2.08C19.82 3.5 12 3.5 12 3.5s-7.82 0-9.418.606a2.957 2.957 0 00-2.08 2.08A30.328 30.328 0 000 12a30.328 30.328 0 00.502 5.814 2.957 2.957 0 002.08 2.08C4.18 20.5 12 20.5 12 20.5s7.82 0 9.418-.606a2.957 2.957 0 002.08-2.08A30.328 30.328 0 0024 12a30.328 30.328 0 00-.502-5.814zM9.75 15.021V8.979L15.5 12l-5.75 3.021z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

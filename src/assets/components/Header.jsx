import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <Link to="/">
        <div class="flex items-center gap-2 cursor-pointer">
          <div class="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-film"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M7 3v18"></path>
              <path d="M3 7.5h4"></path>
              <path d="M3 12h18"></path>
              <path d="M3 16.5h4"></path>
              <path d="M17 3v18"></path>
              <path d="M17 7.5h4"></path>
              <path d="M17 16.5h4"></path>
            </svg>
          </div>
          <span class="font-bold text-lg tracking-tight">MovieDoc</span>
        </div>
      </Link>

      <div class="flex items-center gap-2">
        <Link to="/filme">
          <button class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all active:scale-95 text-sm bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-house"
              aria-hidden="true"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>{' '}
            Início
          </button>
        </Link>
        <Link to="/profile">
          <button class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all active:scale-95 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>{' '}
            Perfil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

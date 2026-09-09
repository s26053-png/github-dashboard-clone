import React, { useState, useEffect, useRef } from 'react';

const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', minWidth: '16px', shrink: 0 }} {...props}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const PlusIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }} {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }} {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CircleDotIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }} {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const GitPullRequestIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }} {...props}>
    <circle cx="18" cy="18" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
    <line x1="6" y1="9" x2="6" y2="21"></line>
  </svg>
);

const InboxIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }} {...props}>
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
  </svg>
);

const UsersIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const UserAvatar = () => (
  <div 
    className="w-5 h-5 rounded-xs bg-purple-100 border border-purple-300 grid grid-cols-3 p-0.5 gap-0.5 items-center justify-center overflow-hidden shrink-0"
    style={{
      width: '20px',
      height: '20px',
      minWidth: '20px',
      minHeight: '20px',
      backgroundColor: '#f3e8ff',
      border: '1px solid #d8b4fe',
      borderRadius: '4px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      padding: '2px',
      gap: '1px'
    }}
  >
    <div style={{ backgroundColor: '#9333ea', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#d8b4fe', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#9333ea', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#9333ea', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#9333ea', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#9333ea', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#d8b4fe', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#9333ea', borderRadius: '1px', width: '100%', height: '100%' }}></div>
    <div style={{ backgroundColor: '#d8b4fe', borderRadius: '1px', width: '100%', height: '100%' }}></div>
  </div>
);

export default function HeaderActions() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const searchInputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '4px 8px',
    fontSize: '12px',
    color: '#374151',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    height: '28px',
    boxSizing: 'border-box'
  };

  const dropdownStyle = {
    position: 'absolute',
    right: 0,
    marginTop: '6px',
    width: '192px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    paddingTop: '4px',
    paddingBottom: '4px',
    zIndex: 50,
    fontSize: '12px'
  };

  return (
    <div 
      ref={containerRef} 
      className="flex items-center space-x-2 text-xs font-sans select-none ml-auto justify-end"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        fontSize: '12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        userSelect: 'none',
        marginLeft: 'auto',
        justifyContent: 'flex-end',
        width: 'auto'
      }}
    >
      <div className="relative flex items-center" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div 
          className={`flex items-center bg-gray-100/80 border rounded-md px-2.5 py-1 w-56 md:w-64 transition-all duration-150 ${
            searchFocused 
              ? 'bg-white border-blue-600 ring-2 ring-blue-100 shadow-xs' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: searchFocused ? '#ffffff' : '#f3f4f6',
            border: searchFocused ? '1px solid #2563eb' : '1px solid #d1d5db',
            borderRadius: '6px',
            padding: '3px 10px',
            width: '220px',
            height: '28px',
            boxSizing: 'border-box'
          }}
        >
          <SearchIcon className="w-3.5 h-3.5 text-gray-500 mr-2 shrink-0" style={{ color: '#6b7280', marginRight: '6px', shrink: 0 }} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Type / to search"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full bg-transparent outline-none text-xs text-gray-800 placeholder-gray-500"
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '12px',
              color: '#1f2937'
            }}
          />
          {!searchFocused && (
            <kbd 
              className="hidden sm:inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-semibold text-gray-500 bg-white border border-gray-300 rounded shadow-2xs ml-1"
              style={{
                fontSize: '10px',
                fontWeight: 600,
                color: '#6b7280',
                backgroundColor: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                padding: '1px 5px',
                marginLeft: '4px'
              }}
            >
              /
            </kbd>
          )}
        </div>
      </div>

      <div 
        className="h-4 w-px bg-gray-300 mx-0.5" 
        style={{ height: '16px', width: '1px', backgroundColor: '#d1d5db', margin: '0 2px' }}
      ></div>

      <div className="relative" style={{ position: 'relative' }}>
        <button
          onClick={() => toggleDropdown('org')}
          title="Switch context"
          className="flex items-center space-x-1 px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 transition-colors shadow-2xs"
          style={btnStyle}
        >
          <UsersIcon className="w-4 h-4 text-gray-600" style={{ color: '#4b5563' }} />
          <ChevronDownIcon className="w-3 h-3 text-gray-500" style={{ color: '#6b7280' }} />
        </button>

        {activeDropdown === 'org' && (
          <div className="absolute right-0 mt-1.5 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 text-xs" style={dropdownStyle}>
            <div style={{ padding: '6px 12px', fontSize: '11px', fontWeight: 600, color: '#6b7280', borderBottom: '1px solid #f3f4f6' }}>
              Switch context
            </div>
            <button 
              style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <UserAvatar />
              <span style={{ fontWeight: 500, color: '#1f2937' }}>s26053-png</span>
            </button>
          </div>
        )}
      </div>

      <div className="relative" style={{ position: 'relative' }}>
        <button
          onClick={() => toggleDropdown('create')}
          title="Create new..."
          className="flex items-center space-x-1 px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 transition-colors shadow-2xs"
          style={btnStyle}
        >
          <PlusIcon className="w-4 h-4 text-gray-600" style={{ color: '#4b5563' }} />
          <ChevronDownIcon className="w-3 h-3 text-gray-500" style={{ color: '#6b7280' }} />
        </button>

        {activeDropdown === 'create' && (
          <div className="absolute right-0 mt-1.5 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 text-xs" style={dropdownStyle}>
            <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>New repository</button>
            <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>Import repository</button>
            <div style={{ borderTop: '1px solid #f3f4f6', margin: '4px 0' }}></div>
            <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>New organization</button>
            <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>New project</button>
          </div>
        )}
      </div>

      <button 
        title="Issues"
        className="p-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-400 transition-colors shadow-2xs"
        style={{ ...btnStyle, padding: '4px 6px' }}
      >
        <CircleDotIcon className="w-4 h-4 text-gray-600" style={{ color: '#4b5563' }} />
      </button>

      <button 
        title="Pull requests"
        className="p-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-400 transition-colors shadow-2xs"
        style={{ ...btnStyle, padding: '4px 6px' }}
      >
        <GitPullRequestIcon className="w-4 h-4 text-gray-600" style={{ color: '#4b5563' }} />
      </button>

      <button 
        title="Inbox"
        className="p-1.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-400 transition-colors shadow-2xs"
        style={{ ...btnStyle, padding: '4px 6px' }}
      >
        <InboxIcon className="w-4 h-4 text-gray-600" style={{ color: '#4b5563' }} />
      </button>

      <div className="relative pl-0.5" style={{ position: 'relative', paddingLeft: '2px' }}>
        <button
          onClick={() => toggleDropdown('profile')}
          title="User profile"
          className="p-1 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:border-gray-400 transition-colors shadow-2xs flex items-center justify-center"
          style={{ ...btnStyle, padding: '3px' }}
        >
          <UserAvatar />
        </button>

        {activeDropdown === 'profile' && (
          <div className="absolute right-0 mt-1.5 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 text-xs" style={{ ...dropdownStyle, width: '220px' }}>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f3f4f6' }}>
              <p style={{ fontWeight: 600, color: '#111827', margin: 0 }}>s26053-png</p>
              <p style={{ color: '#6b7280', fontSize: '11px', margin: 0 }}>Signed in as s26053-png</p>
            </div>
            <div style={{ padding: '4px 0' }}>
              <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>Your profile</button>
              <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>Your repositories</button>
              <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>Your projects</button>
            </div>
            <div style={{ borderTop: '1px solid #f3f4f6', padding: '4px 0' }}>
              <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>Settings</button>
              <button style={{ width: '100%', textAlign: 'left', padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>Sign out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function HeaderPreview() {
  return (
    <header
      style={{
        width: '100%',
        padding: '10px 16px',
        backgroundColor: '#f6f8fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        boxSizing: 'border-box'
      }}
    >
      <HeaderActions />
    </header>
  );
}
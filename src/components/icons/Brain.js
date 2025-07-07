export default function Brain({ className = '', ...props }) {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Neural Network Nodes */}
      {/* Input Layer */}
      <circle cx="3" cy="6" r="1.5" fill="#3B82F6" opacity="0.8"/>
      <circle cx="3" cy="10" r="1.5" fill="#3B82F6" opacity="0.8"/>
      <circle cx="3" cy="14" r="1.5" fill="#3B82F6" opacity="0.8"/>
      <circle cx="3" cy="18" r="1.5" fill="#3B82F6" opacity="0.8"/>
      
      {/* Hidden Layer 1 */}
      <circle cx="8" cy="4" r="1.5" fill="#2563EB" opacity="0.9"/>
      <circle cx="8" cy="8" r="1.5" fill="#2563EB" opacity="0.9"/>
      <circle cx="8" cy="12" r="1.5" fill="#2563EB" opacity="0.9"/>
      <circle cx="8" cy="16" r="1.5" fill="#2563EB" opacity="0.9"/>
      <circle cx="8" cy="20" r="1.5" fill="#2563EB" opacity="0.9"/>
      
      {/* Hidden Layer 2 */}
      <circle cx="13" cy="5" r="1.5" fill="#1D4ED8" opacity="0.9"/>
      <circle cx="13" cy="9" r="1.5" fill="#1D4ED8" opacity="0.9"/>
      <circle cx="13" cy="13" r="1.5" fill="#1D4ED8" opacity="0.9"/>
      <circle cx="13" cy="17" r="1.5" fill="#1D4ED8" opacity="0.9"/>
      
      {/* Output Layer */}
      <circle cx="18" cy="8" r="1.5" fill="#1E40AF" opacity="0.8"/>
      <circle cx="18" cy="12" r="1.5" fill="#1E40AF" opacity="0.8"/>
      <circle cx="18" cy="16" r="1.5" fill="#1E40AF" opacity="0.8"/>
      
      {/* Brain Outline */}
      <circle cx="21" cy="10" r="1.2" fill="#60A5FA" opacity="0.6"/>
      <circle cx="21" cy="14" r="1.2" fill="#60A5FA" opacity="0.6"/>
      
      {/* Neural Connections */}
      {/* Input to Hidden Layer 1 */}
      <path d="M4.5 6L6.5 4" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 6L6.5 8" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 10L6.5 8" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 10L6.5 12" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 14L6.5 12" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 14L6.5 16" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 18L6.5 16" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      <path d="M4.5 18L6.5 20" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4"/>
      
      {/* Hidden Layer 1 to Hidden Layer 2 */}
      <path d="M9.5 4L11.5 5" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      <path d="M9.5 8L11.5 9" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      <path d="M9.5 8L11.5 13" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      <path d="M9.5 12L11.5 13" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      <path d="M9.5 12L11.5 17" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      <path d="M9.5 16L11.5 17" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      <path d="M9.5 20L11.5 17" stroke="#2563EB" strokeWidth="0.5" opacity="0.4"/>
      
      {/* Hidden Layer 2 to Output */}
      <path d="M14.5 5L16.5 8" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.4"/>
      <path d="M14.5 9L16.5 8" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.4"/>
      <path d="M14.5 9L16.5 12" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.4"/>
      <path d="M14.5 13L16.5 12" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.4"/>
      <path d="M14.5 13L16.5 16" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.4"/>
      <path d="M14.5 17L16.5 16" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.4"/>
      
      {/* Output to Brain */}
      <path d="M19.5 8L19.8 10" stroke="#1E40AF" strokeWidth="0.5" opacity="0.4"/>
      <path d="M19.5 12L19.8 10" stroke="#1E40AF" strokeWidth="0.5" opacity="0.4"/>
      <path d="M19.5 12L19.8 14" stroke="#1E40AF" strokeWidth="0.5" opacity="0.4"/>
      <path d="M19.5 16L19.8 14" stroke="#1E40AF" strokeWidth="0.5" opacity="0.4"/>
      
      {/* Activation highlights */}
      <circle cx="13" cy="9" r="2" fill="none" stroke="#60A5FA" strokeWidth="0.3" opacity="0.5"/>
      <circle cx="18" cy="12" r="2" fill="none" stroke="#60A5FA" strokeWidth="0.3" opacity="0.5"/>
      <circle cx="21" cy="12" r="1.8" fill="none" stroke="#60A5FA" strokeWidth="0.3" opacity="0.5"/>
    </svg>
  );
}
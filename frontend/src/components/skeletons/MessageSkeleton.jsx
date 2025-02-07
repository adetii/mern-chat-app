import ContentLoader from "react-content-loader";

const ChatSkeleton = (props) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 320 150"
    backgroundColor="#2a2a2a"
    foregroundColor="#3d3d3d"
    {...props}
  >
    {/* Receiver Message */}
    <circle cx="20" cy="20" r="12" />
    <rect x="40" y="10" rx="8" ry="8" width="180" height="10" />
    <rect x="40" y="25" rx="8" ry="8" width="130" height="10" />

    {/* Sender Message */}
    <circle cx="300" cy="60" r="12" />
    <rect x="100" y="50" rx="8" ry="8" width="180" height="10" />
    <rect x="150" y="65" rx="8" ry="8" width="130" height="10" />

    {/* Another Receiver Message */}
    <circle cx="20" cy="110" r="12" />
    <rect x="40" y="100" rx="8" ry="8" width="160" height="10" />
    <rect x="40" y="115" rx="8" ry="8" width="110" height="10" />
  </ContentLoader>
);

export default ChatSkeleton;

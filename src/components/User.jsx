export default function User({ displayName, profileImg, mobile }) {
    return (
        <>
            {!mobile && <p className="mr-2">{displayName}</p>}
            <img
                className="h-10 w-10 rounded-full border border-gray-300"
                src={
                    profileImg === 'default' || !profileImg
                        ? '/images/default_image.webp'
                        : profileImg
                }
                alt={displayName ?? 'Anonymous'}
            />
            {mobile && <p className="ml-2">{displayName}</p>}
        </>
    );
}
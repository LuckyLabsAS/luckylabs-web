/**
 * iPhone frame showing the Vinn app demo video.
 * Same dark variant as vinn-web (vunnet.no): public/app-demo-dark.mp4.
 */
export function PhoneMockup() {
    return (
        <div className="phone" aria-hidden>
            <div className="phone__glow" />
            <div className="phone__frame">
                <div className="phone__notch" />
                <div className="phone__screen">
                    <video
                        className="phone__video"
                        src="/app-demo-dark.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    />
                </div>
            </div>
        </div>
    );
}

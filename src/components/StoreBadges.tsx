import { AppleIcon } from "./icons";
import { APP_STORE_URL } from "../lib/site";

export function StoreBadges() {
    return (
        <div className="store-badges">
            <a className="store-badge" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                <AppleIcon className="store-badge__icon" />
                <span className="store-badge__text">
                    <span className="store-badge__top">Last ned på</span>
                    <span className="store-badge__bottom">App Store</span>
                </span>
            </a>
        </div>
    );
}

import { FC } from 'react';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";

const Header: FC = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <header>
            <Link href="/">home</Link>
            {isAuthenticated ?
                <span>
                    ログイン中
                    {/*<img src={user?.picture} alt={user?.name} />*/}
                    {user?.name}
                    {user?.email}
                    <button onClick={() => logout({ returnTo: window.location.origin })}>
                        ログアウト
                    </button>
                </span>
            :
                <span>
                    ログアウト中
                    <button onClick={() => loginWithRedirect()}>ログイン</button>
                </span>
            }
        </header>
    );
};

export default Header;

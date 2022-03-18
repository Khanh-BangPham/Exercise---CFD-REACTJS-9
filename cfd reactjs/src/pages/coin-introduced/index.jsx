import React from 'react';
import Content from './components/Content';

const CoinIntroduced = () => {
    return (
        <>
            <main className="paypage" id="main">
                <div className="container">
                    <section>
                        <h2 className="main-title">Giới thiệu Coin</h2>
                        <div className="content">
                            <Content />
                            <Content />
                            <Content />
                        </div>
                    </section>
                </div>
            </main>

        </>
    );
}

export default CoinIntroduced;

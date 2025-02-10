import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>FitnessPro ile Formda Kalın</h1>
                    <p>Kişiselleştirilmiş antrenman programları ve beslenme tavsiyeleri ile hedeflerinize ulaşın.</p>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&auto=format" alt="Fitness" />
                </div>
            </div>

            <div className="features">
                <div className="feature-card">
                    <img src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format" alt="Egzersiz Kütüphanesi" />
                    <h3>Egzersiz Kütüphanesi</h3>
                    <p>500+ detaylı egzersiz açıklaması ve video</p>
                </div>

                <div className="feature-card">
                    <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format" alt="Antrenman Programları" />
                    <h3>Antrenman Programları</h3>
                    <p>Seviyenize uygun özelleştirilmiş programlar</p>
                </div>

                <div className="feature-card">
                    <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format" alt="İlerleme Takibi" />
                    <h3>İlerleme Takibi</h3>
                    <p>Gelişiminizi grafikler ile takip edin</p>
                </div>
            </div>
        </div>
    );
}

export default Home; 
import ButtonNextPage from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import './styles.css';


export default function ProductCatalog() {

    return (

        <>

        <HeaderClient />
            <main>
                <section id="catalog-section" className="product-container">
                    
                    <SearchBar />

                    <div className="catalog-cards mb20 mt20">
                        
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    </div>

                    <ButtonNextPage />
                </section>
            </main>
        </>
    );
}
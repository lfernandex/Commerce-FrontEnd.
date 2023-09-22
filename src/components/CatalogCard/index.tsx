import notebookImg from '../../assets/notebook.jpg';
import './styles.css';

export default function CatalogCard() {

    return (

        <div className="commerce-card">
            <div className="catalog-card-top line-bottom">
                <img src={notebookImg} alt="Notebook" />
            </div>
            <div className="catalog-card-bottom">
                <h3>R$: 5000,00</h3>
                <h4>Computador Gamer XT</h4>
            </div>
        </div>
    );
}
import {React} from 'react';
import {Card} from '../../components/exports';
import './strategies.css';
import Illustration1 from '../../assets/card-icon-1.svg';
import Illustration2 from '../../assets/card-icon-2.svg';
import Illustration3 from '../../assets/card-icon-3.svg';


const cardData = [
    {
        author: 'Abdulahi',
        imgUrl: Illustration1,
        date: '03 March 2019',
        txt: 'Increasing Prosperity With Positive Thinking'
    },

    {
        author: 'Abdulahi',
        imgUrl: Illustration2,
        date: '03 March 2019',
        txt: 'Motivation Is The First Step To Success'
    },
    {
        author: 'John Doe',
        imgUrl: Illustration3,
        date: '03 March 2019',
        txt: 'Success Steps For Your Personal Or Business Life'
    }
]
const Strategies = () => {
    return (
        <section id='strategies' className='block_container pdly__strategies'>
            <section className="strategies-header">
                <h3>Marketting Strategies</h3>
                <p>Join 40,000+ other marketers and get proven strategies on email marketing</p>
            </section>
            <section className="strategies-cards">
                {cardData.map((data, index) => <Card key={index} data={data}/>)}
            </section>
            <section className="strategies-pagination">
                <p className="pagination-icon"></p>
                <p className="pagination-icon"></p>
                <p className="pagination-icon"></p>
            </section>
        </section>
    )
}


export default Strategies;
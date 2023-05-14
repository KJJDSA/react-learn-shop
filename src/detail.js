import items from "./items.json"
import {useParams} from "react-router-dom";

function Detail(prop) {
    const { id } = useParams();
    const item = items.find((x) => x.id === Number(id));
    return (
        <div className={'detail-container'}>
            <div className={'header'}>
                <h2>{item.title}</h2>
                <span>{item.price} {item.monetary}</span>
            </div>
            <div className={'body'}>
                <div className={'explain img'}>
                    <img src={item.url} alt=""/>
                </div>
                <div className={'explain content'}>
                    <h3>{item.content}</h3>
                </div>
                <div className={'submit'}>
                    <button type={'button'} onClick={getCart(item)}>장바구니 담기</button>
                </div>
            </div>
        </div>
    )
}

function getCart(item) {
    console.log(item)
}

export default Detail
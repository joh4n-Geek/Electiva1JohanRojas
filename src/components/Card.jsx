export const Card = ( {id = '123', title = 'Funny Cat GIF', url = 'https://media2.giphy.com/media/gm3Z05VsyZsFG/200w.webp?cid=53f81e63xh4t9qav4qct4nkkf2s8rwoa4jdba7meth7qid8g&ep=v1_gifs_search&rid=200w.webp&ct=g'} ) => {
    return (
        <div key={id} class="card text-bg-dark" style={{width: 200, height: 200}}>
            <img src={url} class="card-img" alt={title} />
            <div class="card-img-overlay">
                <h5 class="card-title">{ title }</h5>
            </div>
        </div>
    );
}
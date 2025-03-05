export default function Item({ text = 'show', image = '' }) {
    return (
        <div>
            <img height='200px' width='200px' src={image} alt="Item Image" />
            <br />
            <span style={{ margin: 10 }}>{text}</span>
            <button>Save</button>
        </div>
    );
}
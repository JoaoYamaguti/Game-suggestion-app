import './style.css'

export function Button({href, message}) {
    return (
        <a href={href} className='btn'>{message}</a>
    )
}
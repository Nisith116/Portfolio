export function TabButtons ({children, onSelect, isSelected}) {
    return (
        <button className={ isSelected ? 'active' : null } onClick={onSelect}>{children}</button>
    )
}
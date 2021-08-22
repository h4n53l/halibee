const CardWrapper = ({children}) => {
    return (
        <section class="pt-10 pb-10">
        <div class="columns card-column order-3">
            {children}
            </div>
            </section>
    );
}

export default CardWrapper;
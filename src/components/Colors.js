
function Colors() {

	const onMode = (e) => {
		const container = document.querySelector('.container')
		
		container.className = '';
		container.classList.add("container")
		container.classList.add(e.target.dataset.mode)
	}
	
	return (
		<section className="header__colors">
			<span className="colors__title">Today I am </span>
			<ul className="colors__list list">
				<li className="list__item" onClick={onMode} data-mode="robot">Robot</li>
				<li className="list__item" onClick={onMode} data-mode="minimalist">Minimalist</li>
				<li className="list__item" onClick={onMode} data-mode="rainbow">Rainbow</li>
				<li className="list__item" onClick={onMode} data-mode="normal">Leave me alone and let the application work normally</li>
			</ul>
		</section>
	);
}

export default Colors;

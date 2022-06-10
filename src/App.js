import React from 'react';

const posts = [
	{
	id: 1,
	title: 'Pilne: Co to był za dzień!',
	intro: 'Tego świat jeszcze nie widział'
	},
	{
	id: 2,
	title: 'Wszyscy zazdroszczą Polakom!',
	intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'
	},
	{
	id: 3,
	title: 'Adam Małysz zgolił wąs',
	intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
	},
];

const styles = {
	newsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '10px 0',
	},
	newsItemStyle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: '15px',
		padding: '10px 0',
		height: '30vh',
		maxWidth: 330,
		textAlign: 'center',
		backgroundColor: 'rgb(255, 237, 219)',
		border: '2px solid black',
		title: {
			padding: '10px',
			borderTop: '1px solid black',
			borderBottom: '1px solid black',
			backgroundColor: 'rgb(227, 183, 160)',
			textTransform: 'uppercase',
		},
		intro: {
			color: 'rgb(96, 54, 1)',
		},
	},
};

const shorterIntroElement = (intro, customIntroLength = 25) => {
	if ( intro.length > customIntroLength ) {
		const slicedIntro = intro.slice(0,25);
		const slicedIntroWithDots = slicedIntro.concat('...');
		return slicedIntroWithDots;
	} else {
		return intro;
	};
};

function BlogTile(posts) {
	const { title, intro } = posts;
	const stylesForEachNews = styles.newsItemStyle;
	const stylesForTitle = styles.newsItemStyle.title;
	const stylesForIntro = styles.newsItemStyle.intro;

	return (
		<div style={stylesForEachNews}>
			<h2 style={stylesForTitle}>{title}</h2>
			<p style={stylesForIntro}>{intro}</p>
		</div>
	);
};

function App() {
	const stylesForNewsContainer = styles.newsContainer;

	return(
		<div style={stylesForNewsContainer}>
			{posts.map((elem) => (
				 <BlogTile key={`news-${elem.id}`} title={elem.title} intro={shorterIntroElement(elem.intro)} />
			))};
		</div>
	);
};

export default App;
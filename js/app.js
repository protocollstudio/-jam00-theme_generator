import * as generator from './generator.js';

window.addEventListener('DOMContentLoaded', function() {
	const button = document.getElementById('generate-button');
	button.addEventListener('click', () => {
      setTimeout(() => {
        changeTheme();
      }, 300);
      hideContainer();
  });
});

async function changeTheme() {
	const theme = await generator.newTheme();
	updateTheme(theme);
}

function updateTheme(theme) {
	[
		{
			idName: 'verb',
			word: theme.verb
		},
		{
			idName: 'adjective',
			word: theme.adjective
		},
		{
			idName: 'noun',
			word: theme.noun
		}
	].forEach((mappingWordTag) => {
		changeTagWord(mappingWordTag);
  });
  
  showContainer();
}

function changeTagWord(mappingWordTag) {
	const tag = document.getElementById(mappingWordTag.idName);
	const underlinedTag = "<span class='underline'></span>";
	tag.innerHTML = `${mappingWordTag.word} ${underlinedTag}`;
}

function hideContainer() {
  const container = document.getElementById("theme-container");
  container.classList.remove("visible");
  container.classList.add("hide");iner.classList.add("visible");
}

function showContainer() {
  const container = document.getElementById("theme-container");
  container.classList.remove("hide");
  container.classList.add("visible");
}

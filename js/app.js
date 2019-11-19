import * as generator from './generator.js';

window.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById("generate-button");
  button.addEventListener("click", changeTheme);
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
  ].forEach(mappingWordTag => {
    changeTagWord(mappingWordTag);
  });
}

function changeTagWord(mappingWordTag) {
  const tag = document.getElementById(mappingWordTag.idName);
  const underlinedTag = "<span class='underline'></span>";
  tag.innerHTML = `${mappingWordTag.word} ${underlinedTag}`;
}

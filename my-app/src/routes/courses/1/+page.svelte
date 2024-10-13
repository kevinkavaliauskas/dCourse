<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { courses } from '../../courses';
	import { Button } from '$lib/components/ui/button';

	const questions = [
		{
			question: 'What period does Renaissance art cover?',
			options: ['1300-1400', '1350-1620', '1400-1500'],
			answer: 1 // index of the correct answer
		},
		{
			question: 'Who painted The Birth of Venus?',
			options: ['Leonardo da Vinci', 'Sandro Botticelli', 'Michelangelo'],
			answer: 1
		},
		{
			question: 'Which city is considered the birthplace of the Renaissance?',
			options: ['Florence', 'Venice', 'Rome'],
			answer: 0
		},
		{
			question: 'Who painted the Mona Lisa?',
			options: ['Raphael', 'Leonardo da Vinci', 'Titian'],
			answer: 1
		},
		{
			question: 'Which artist is known for the sculpture of David?',
			options: ['Donatello', 'Michelangelo', 'Bernini'],
			answer: 1
		},
		{
			question: 'What is a key characteristic of Renaissance art?',
			options: ['Abstract expressionism', 'Emphasis on humanism', 'Use of digital media'],
			answer: 1
		},
		{
			question: 'Who painted the School of Athens?',
			options: ['Raphael', 'Caravaggio', 'Giotto'],
			answer: 0
		},
		{
			question: 'Which of these works was created by Michelangelo?',
			options: ['The Last Supper', 'The Creation of Adam', 'Primavera'],
			answer: 1
		},
		{
			question:
				'What technique, meaning "light-dark" in Italian, was popularized during the Renaissance?',
			options: ['Sfumato', 'Chiaroscuro', 'Fresco'],
			answer: 1
		},
		{
			question: 'Who is considered the father of Renaissance architecture?',
			options: ['Brunelleschi', 'Alberti', 'Palladio'],
			answer: 0
		}
	];

	const answers = Array(questions.length).fill(null);

	async function checkAnswers() {
		let score = 0; // Initialize score
		answers.forEach((answer, index) => {
			console.log(answer);
			console.log(questions[index].answer);
			if (answer == String(questions[index].answer)) {
				score++; // Increment score for correct answers
			}
		});
		alert(`Your score is ${score} out of ${questions.length}`); // Display score
	}
</script>

<div class="mx-auto mt-8 flex w-4/5 flex-col space-y-4">
	<h1 class="mb-4 text-4xl">Renaissance art</h1>
	<div>
		Renaissance art (1350 – 1620[1]) is the painting, sculpture, and decorative arts of the period
		of European history known as the Renaissance, which emerged as a distinct style in Italy in
		about AD 1400, in parallel with developments which occurred in philosophy, literature, music,
		science, and technology.[2] Renaissance art took as its foundation the art of Classical
		antiquity, perceived as the noblest of ancient traditions, but transformed that tradition by
		absorbing recent developments in the art of Northern Europe and by applying contemporary
		scientific knowledge. Along with Renaissance humanist philosophy, it spread throughout Europe,
		affecting both artists and their patrons with the development of new techniques and new artistic
		sensibilities. For art historians, Renaissance art marks the transition of Europe from the
		medieval period to the Early Modern age.
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tiziano_-_Amor_Sacro_y_Amor_Profano_%28Galer%C3%ADa_Borghese%2C_Roma%2C_1514%29.jpg/2880px-Tiziano_-_Amor_Sacro_y_Amor_Profano_%28Galer%C3%ADa_Borghese%2C_Roma%2C_1514%29.jpg"
			alt="old"
		/>
	</div>
	<div>
		Sandro Botticelli, The Birth of Venus, c. 1485, Uffizi, Florence The body of art, including
		painting, sculpture, architecture, music and literature identified as "Renaissance art" was
		primarily produced during the 14th, 15th, and 16th centuries in Europe under the combined
		influences of an increased awareness of nature, a revival of classical learning, and a more
		individualistic view of man.[3] Scholars no longer believe that the Renaissance marked an abrupt
		break with medieval values, as is suggested by the French word renaissance, literally meaning
		"rebirth". In many parts of Europe, Early Renaissance art was created in parallel with Late
		Medieval art.
	</div>
	<div>
		Origins Many influences on the development of Renaissance men and women in the early 15th
		century have been credited with the emergence of Renaissance art; they are the same as those
		that affected philosophy, literature, architecture, theology, science, government and other
		aspects of society. The following list presents a summary of changes to social and cultural
		conditions which have been identified as factors which contributed to the development of
		Renaissance art. Each is dealt with more fully in the main articles cited above. The scholars of
		Renaissance period focused on present life and ways improve human life. They did not pay much
		attention to medieval philosophy or religion. During this period, scholars and humanists like
		Erasmus, Dante and Petrarch criticized superstitious beliefs and also questioned them. [4] The
		concept of education also widened its spectrum and focused more on creating 'an ideal man' who
		would have a fair understanding of arts, music, poetry and literature and would have the ability
		to appreciate these aspects of life.
	</div>
	<div class="flex flex-row space-x-4">
		<p>
			Classical texts, lost to European scholars for centuries, became available. These included
			documents of philosophy, prose, poetry, drama, science, a thesis on the arts, and early
			Christian theology. Europe gained access to advanced mathematics, which had its provenance in
			the works of Islamic scholars. The advent of movable type printing in the 15th century meant
			that ideas could be disseminated easily, and an increasing number of books were written for a
			broader public. The establishment of the Medici Bank and the subsequent trade it generated
			brought unprecedented wealth to a single Italian city, Florence. Cosimo de' Medici set a new
			standard for patronage of the arts, not associated with the church or monarchy. Humanist
			philosophy meant that man's relationship with humanity, the universe and God was no longer the
			exclusive province of the church. A revived interest in the Classics brought about the first
			archaeological study of Roman remains by the architect Brunelleschi and sculptor Donatello.
			The revival of a style of architecture based on classical precedents inspired a corresponding
			classicism in painting and sculpture, which manifested itself as early as the 1420s in the
			paintings of Masaccio and Uccello. The improvement of oil paint and developments in
			oil-painting technique by Belgian artists such as Robert Campin, Jan van Eyck, Rogier van der
			Weyden and Hugo van der Goes led to its adoption in Italy from about 1475 and had ultimately
			lasting effects on painting practices worldwide. The serendipitous presence within the region
			of Florence in the early 15th century of certain individuals of artistic genius, most notably
			Masaccio, Brunelleschi, Ghiberti, Piero della Francesca, Donatello and Michelozzo formed an
			ethos out of which sprang the great masters of the High Renaissance, as well as supporting and
			encouraging many lesser artists to achieve work of extraordinary quality.[5] A similar
			heritage of artistic achievement occurred in Venice through the talented Bellini family, their
			influential in-law Mantegna, Giorgione, Titian and Tintoretto.[5][6][7] The publication of two
			treatises by Leone Battista Alberti, De pictura ("On Painting") in 1435 and De re
			aedificatoria ("Ten Books on Architecture") in 1452.
		</p>
		<img
			class="w-1/4"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg/1024px-Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg"
			alt="people"
		/>
	</div>
	<div>
		History Proto-Renaissance in Italy, 1280–1400 Square fresco. In a shallow space like a stage
		set, lifelike figures gather around the dead body of Jesus. All are mourning. Mary Magdalene
		weeps over his feet. A male disciple throws out his arms in despair. Joseph of Arimethea holds
		the shroud. In Heaven, small angels are shrieking and tearing their hair. Giotto: The
		Lamentation, c. 1305, Scrovegni Chapel, foreshadows the Renaissance. Main article: Italian
		Renaissance painting In Italy in the late 13th and early 14th centuries, the sculpture of Nicola
		Pisano and his son Giovanni Pisano, working at Pisa, Siena and Pistoia shows markedly
		classicising tendencies, probably influenced by the familiarity of these artists with ancient
		Roman sarcophagi. Their masterpieces are the pulpits of the Baptistery and Cathedral of Pisa.
		Contemporary with Giovanni Pisano, the Florentine painter Giotto developed a manner of
		figurative painting that was unprecedentedly naturalistic, three-dimensional, lifelike and
		classicist, when compared with that of his contemporaries and teacher Cimabue. Giotto, whose
		greatest work is the cycle of the Life of Christ at the Arena Chapel in Padua, was seen by the
		16th-century biographer Giorgio Vasari as "rescuing and restoring art" from the "crude,
		traditional, Byzantine style" prevalent in Italy in the 13th century.
	</div>
	<div>
		Early Renaissance in Italy, 1400–1495 Main articles: Italian Renaissance painting, Italian
		Renaissance sculpture, Florentine painting, Florentine Renaissance art, and Venetian painting
		Donatello, David (1440s?) Museo Nazionale del Bargello. Although both the Pisanos and Giotto had
		students and followers, the first truly Renaissance artists were not to emerge in Florence until
		1401 with the competition to sculpt a set of bronze doors of the Baptistery of Florence
		Cathedral, which drew entries from seven young sculptors including Brunelleschi, Donatello and
		the winner, Lorenzo Ghiberti. Brunelleschi, most famous as the architect of the dome of Florence
		Cathedral and the Church of San Lorenzo, created a number of sculptural works, including a
		life-sized crucifix in Santa Maria Novella, renowned for its naturalism. His studies of
		perspective are thought to have influenced the painter Masaccio. Donatello became renowned as
		the greatest sculptor of the Early Renaissance, his masterpieces being his humanist and
		unusually erotic statue of David, one of the icons of the Florentine republic, and his great
		monument to Gattamelata, the first large equestrian bronze to be created since Roman times.
	</div>
	<div>
		The contemporary of Donatello, Masaccio, was the painterly descendant of Giotto and began the
		Early Renaissance in Italian painting in 1425, furthering the trend towards solidity of form and
		naturalism of face and gesture that Giotto had begun a century earlier. From 1425 to 1428,
		Masaccio completed several panel paintings but is best known for the fresco cycle that he began
		in the Brancacci Chapel with the older artist Masolino and which had a profound influence on
		later painters, including Michelangelo. Masaccio's developments were carried forward in the
		paintings of Fra Angelico, particularly in his frescos at the Convent of San Marco in Florence.
	</div>
	<div>
		The treatment of the elements of perspective and light in painting was of particular concern to
		15th-century Florentine painters. Uccello was so obsessed with trying to achieve an appearance
		of perspective that, according to Giorgio Vasari, it disturbed his sleep. His solutions can be
		seen in his masterpiece set of three paintings, the Battle of San Romano, which is believed to
		have been completed by 1460. Piero della Francesca made systematic and scientific studies of
		both light and linear perspective, the results of which can be seen in his fresco cycle of The
		History of the True Cross in San Francesco, Arezzo.
	</div>
	<div>
		In Naples, the painter Antonello da Messina began using oil paints for portraits and religious
		paintings at a date that preceded other Italian painters, possibly about 1450. He carried this
		technique north and influenced the painters of Venice. One of the most significant painters of
		Northern Italy was Andrea Mantegna, who decorated the interior of a room, the Camera degli Sposi
		for his patron Ludovico Gonzaga, setting portraits of the family and court into an illusionistic
		architectural space.
	</div>
	<div class="pb-16">
		The end period of the Early Renaissance in Italian art is marked, like its beginning, by a
		particular commission that drew artists together, this time in cooperation rather than
		competition. Pope Sixtus IV had rebuilt the Papal Chapel, named the Sistine Chapel in his
		honour, and commissioned a group of artists, Sandro Botticelli, Pietro Perugino, Domenico
		Ghirlandaio and Cosimo Rosselli to decorate its wall with fresco cycles depicting the Life of
		Christ and the Life of Moses. In the sixteen large paintings, the artists, although each working
		in his individual style, agreed on principles of format, and utilised the techniques of
		lighting, linear and atmospheric perspective, anatomy, foreshortening and characterisation that
		had been carried to a high point in the large Florentine studios of Ghiberti, Verrocchio,
		Ghirlandaio and Perugino.
	</div>

	<div class="flex flex-col space-y-8">
		{#each questions as set, k}
			<div>
				<h5 class="text-lg">{k + 1}. {set.question}</h5>
				<RadioGroup.Root bind:value={answers[k]}>
					{#each set.options as answer, i}
						<div class="flex items-center space-x-2">
							<RadioGroup.Item value={String(i)} id="r{k + 1}" />
							<Label for="r{k * i + 1}">{answer}</Label>
						</div>
					{/each}
					<RadioGroup.Input name="spacing" />
				</RadioGroup.Root>
			</div>
		{/each}
		<Button on:click={checkAnswers} class="w-40">Check answers</Button>
	</div>
</div>

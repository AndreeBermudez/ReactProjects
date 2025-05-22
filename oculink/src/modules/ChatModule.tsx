import { Delete, Home, LucideArrowLeftToLine, MessageCircle, Mic, Save, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ButtonCircle } from '../components/ButtonCircle';
import { ButtonWords } from '../components/ButtonWords';
import { HoverIndicator } from '../components/HoverIndicator';

// Grupos de letras como en tus imágenes
const firstLetterGroup = ['E', 'A', 'O', 'S', 'R', 'N', 'I', 'D', 'L'];
const secondLetterGroup = ['C', 'T', 'U', 'M', 'P', 'B', 'G', 'V', 'Y'];
const thirdLetterGroup = ['Q', 'U', 'H', 'F', 'Z', 'J', 'Ñ', 'X', 'K', 'W'];
const symbolsGroup = ['Á', '?', '!', ','];
const suggestWordsGemini = ['ES', 'ESTOY', 'ESO']; // Palabras comunes

export const ChatModule = () => {
	const [inputText, setInputText] = useState<string>('');
	const [activeLetterGroup, setActiveLetterGroup] = useState<string[] | null>(null);
	const [isIndividualLetterView, setIsIndividualLetterView] = useState<boolean>(false);
	const [hoverTarget, setHoverTarget] = useState<string | null>(null);
	const [hoverProgress, setHoverProgress] = useState(0);
	const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
	const { transcript, listening, resetTranscript } = useSpeechRecognition();
	const prevTranscriptRef = useRef('');

	useEffect(() => {
		if (transcript && transcript !== prevTranscriptRef.current) {
			console.log('Transcripción detectada:', transcript);
			console.log('Transcripción anterior:', prevTranscriptRef.current);

			// Obtener solo el texto nuevo
			const newText = transcript.substring(prevTranscriptRef.current.length);
			console.log('Texto nuevo añadido:', newText);

			// Actualizar el inputText con el nuevo texto
			setInputText((prev) => {
				const updated = prev + newText;
				console.log('Input actualizado:', updated);
				return updated;
			});

			// Actualizar la referencia
			prevTranscriptRef.current = transcript;
		}
	}, [transcript]);

	const startListening = () => {
		resetTranscript();
		prevTranscriptRef.current = '';
		SpeechRecognition.startListening({
			continuous: true,
			language: 'es-ES',
		});
	};

	const stopListening = () => {
		SpeechRecognition.stopListening();
	};

	const startHover = (targetId: string, action: () => void) => {
		if (hoverTimerRef.current) {
			clearInterval(hoverTimerRef.current);
			hoverTimerRef.current = null;
		}
		setHoverTarget(targetId);
		setHoverProgress(0);
		const actionToPerform = action;

		hoverTimerRef.current = setInterval(() => {
			setHoverProgress((prev) => {
				const newProgress = prev + 1;
				if (newProgress >= 100) {
					clearInterval(hoverTimerRef.current as NodeJS.Timeout);
					actionToPerform();
					setHoverTarget(null);
					setHoverProgress(0);
					return 0;
				}
				return newProgress;
			});
		}, 15);
	};

	const stopHover = () => {
		if (hoverTimerRef.current) {
			clearInterval(hoverTimerRef.current);
			hoverTimerRef.current = null;
		}
		setHoverTarget(null);
		setHoverProgress(0);
	};

	const handleLetterGroupClick = (group: string[]) => {
		setActiveLetterGroup(group);
		setIsIndividualLetterView(true); // Activar vista de letras individuales
	};

	const handleLetterClick = (letter: string) => {
		setInputText((prev) => prev + letter);
		setActiveLetterGroup(null); // Volver a la vista principal
		setIsIndividualLetterView(false);
	};

	const handleWordClick = (word: string) => {
		setInputText((prev) => prev + word + ' ');
	};

	const handleDelete = () => {
		setInputText((prev) => prev.slice(0, -1));
	};

	const handleSpace = () => {
		setInputText((prev) => prev + ' ');
	};

	const handleClear = () => {
		setInputText('');
		resetTranscript();
		prevTranscriptRef.current = '';
	};

	const handleBack = () => {
		setActiveLetterGroup(null);
		setIsIndividualLetterView(false);
	};

	const handleTextToSpeech = (text: string) => {
		if (!text) return;
		window.speechSynthesis.cancel();
		const value = new SpeechSynthesisUtterance(text);
		const voices = window.speechSynthesis.getVoices();
		const spanishVoice = voices.find((voice) => voice.lang.includes('es') || voice.name.includes('Spanish'));

		if (spanishVoice) {
			value.voice = spanishVoice;
		}
		window.speechSynthesis.speak(value);
	};

	return (
		<div className='bg-black min-h-screen'>
			{/* Campo de entrada de texto */}
			<div
				className=' relative p-4'
				onMouseEnter={() => startHover('input', () => handleTextToSpeech(inputText))}
				onMouseLeave={stopHover}>
				<input
					type='text'
					className='w-full py-10 px-4 rounded-md bg-white text-2xl focus:outline-none'
					value={inputText}
				/>
				{hoverTarget == 'input' && <HoverIndicator progress={hoverProgress} color='#ff5c5c' />}
			</div>
			<div className='p-4 grid grid-cols-5 gap-3'>
				{/* Primera fila */}
				{isIndividualLetterView ? (
					<div
						className='relative flex justify-center'
						onMouseEnter={() => startHover('back-button', handleBack)}
						onMouseLeave={stopHover}>
						<ButtonCircle Icon={LucideArrowLeftToLine} color='#3dffd0' bgColor='#08201a' onClick={handleBack} />
						{hoverTarget == 'back-button' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
					</div>
				) : (
					<div
						className='relative flex justify-center'
						onMouseEnter={() => startHover('home-button', handleBack)}
						onMouseLeave={stopHover}>
						<ButtonCircle Icon={Home} color='white' bgColor='#202020' />
						{hoverTarget == 'home-button' && <HoverIndicator progress={hoverProgress} color='white' />}
					</div>
				)}
				{suggestWordsGemini.map((word) => (
					<div
						className='relative flex justify-center'
						key={word}
						onMouseEnter={() => startHover(word, () => handleWordClick(word))}
						onMouseLeave={stopHover}>
						<ButtonWords words={word} onClick={() => handleWordClick(word)} />
						{hoverTarget == word && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
					</div>
				))}{' '}
				<div
					className='relative flex justify-center'
					onMouseEnter={() => startHover('delete-button', handleDelete)}
					onMouseLeave={stopHover}>
					<ButtonCircle Icon={Delete} color='#ff5c5c' bgColor='#412626' onClick={handleDelete} />
					{hoverTarget === 'delete-button' && <HoverIndicator progress={hoverProgress} color='#ff5c5c' />}
				</div>
				{/* Segunda fila */}
				{isIndividualLetterView && activeLetterGroup ? (
					<>
						{activeLetterGroup.map((letter) => (
							<div
								className='relative flex justify-center'
								key={letter}
								onMouseEnter={() => startHover(letter, () => handleLetterClick(letter))}
								onMouseLeave={stopHover}>
								<ButtonWords words={letter} onClick={() => handleLetterClick(letter)} />
								{hoverTarget == letter && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
							</div>
						))}
					</>
				) : (
					<>
						{' '}
						<div
							className='relative flex justify-center'
							onMouseEnter={() =>
								startHover('numbers', () =>
									handleLetterGroupClick(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
								)
							}
							onMouseLeave={stopHover}>
							<ButtonWords
								words='0 - 9'
								onClick={() => handleLetterGroupClick(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])}
							/>
							{hoverTarget === 'numbers' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('firstGroup', () => handleLetterGroupClick(firstLetterGroup))}
							onMouseLeave={stopHover}>
							<ButtonWords
								words={firstLetterGroup}
								onClick={() => handleLetterGroupClick(firstLetterGroup)}
								className='text-xs'
							/>
							{hoverTarget === 'firstGroup' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('secondGroup', () => handleLetterGroupClick(secondLetterGroup))}
							onMouseLeave={stopHover}>
							<ButtonWords
								words={secondLetterGroup}
								onClick={() => handleLetterGroupClick(secondLetterGroup)}
								className='text-xs'
							/>
							{hoverTarget === 'secondGroup' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('thirdGroup', () => handleLetterGroupClick(thirdLetterGroup))}
							onMouseLeave={stopHover}>
							<ButtonWords
								words={thirdLetterGroup}
								onClick={() => handleLetterGroupClick(thirdLetterGroup)}
								className='text-xs'
							/>
							{hoverTarget === 'thirdGroup' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('save-button', () => {})}
							onMouseLeave={stopHover}>
							<ButtonCircle Icon={Save} color='#3dffd0' bgColor='#08201a' />
							{hoverTarget === 'save-button' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
						</div>
						{/* Tercera fila */}
						<div className='relative flex justify-center'>
							<ButtonCircle
								Icon={Mic}
								color={listening ? '#ff0000' : '#ff5c5c'}
								bgColor={listening ? '#5a0000' : '#412626'}
								onClick={listening ? stopListening : startListening}
							/>
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('clear-button', handleClear)}
							onMouseLeave={stopHover}>
							<ButtonCircle Icon={X} color='#ff5c5c' bgColor='#412626' onClick={handleClear} />
							{hoverTarget === 'clear-button' && <HoverIndicator progress={hoverProgress} color='#ff5c5c' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('space-button', handleSpace)}
							onMouseLeave={stopHover}>
							<ButtonWords words='' onClick={handleSpace} className='flex items-center justify-center'>
								<div className='w-4/5 h-2 bg-white rounded-full'></div>
							</ButtonWords>
							{hoverTarget === 'space-button' && <HoverIndicator progress={hoverProgress} color='#ffffff' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('symbols-button', () => handleLetterGroupClick(symbolsGroup))}
							onMouseLeave={stopHover}>
							<ButtonWords words={symbolsGroup} onClick={() => handleLetterGroupClick(symbolsGroup)} />
							{hoverTarget === 'symbols-button' && <HoverIndicator progress={hoverProgress} color='#3dffd0' />}
						</div>
						<div
							className='relative flex justify-center'
							onMouseEnter={() => startHover('message-button', () => {})}
							onMouseLeave={stopHover}>
							<ButtonCircle Icon={MessageCircle} color='#b066ff' bgColor='#160d20' />
							{hoverTarget === 'message-button' && <HoverIndicator progress={hoverProgress} color='#b066ff' />}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

const personalityTypes = [
  {
    id: 1,
    title: 'Carefree playful cheerful',
    description:
      "You embody a carefree and playful spirit, finding joy in the spontaneity of life. Your mantra is 'You only live once,' and you strive to embrace every moment to the fullest. Your curiosity knows no bounds, and you eagerly welcome new experiences and opportunities. Change is not only welcomed but celebrated by you, as you thrive in dynamic environments. Feeling confined or restricted stifles your sense of freedom. You perceive your surroundings as diverse and constantly filled with delightful surprises. Your openness to the unknown allows you to navigate through life with enthusiasm and optimism, embracing each day as a new adventure",
  },
  {
    id: 2,
    title: 'Independent unconventional unfettered',
    description:
      "You cherish independence and freedom, valuing a life that allows you to chart your own path. Whether in work or leisure, you possess a creative and artistic flair that sets you apart. Your longing for liberty often leads you to defy expectations and norms. Rather than conforming to societal standards, you follow your own unique vision, even if it means going against the grain. Your lifestyle reflects your individuality and authenticity. Rather than blindly adhering to trends, you prioritize living in alignment with your own beliefs and principles. You're not afraid to stand out and pursue your passions, even if it means taking the road less travelled.",
  },
  {
    id: 3,
    title: 'Introspective sensitive reflective',
    description:
      'You possess a profound understanding of yourself and your surroundings, delving into introspection and observation more deeply and frequently than most. Shallow conversations hold no appeal for you; you value genuine connections and meaningful interactions over small talk. Though you cherish solitude and are content being alone for extended periods, your bonds with friends run deep, providing you with the inner peace and balance you crave. These close relationships are a source of strength and comfort, enriching your life. In moments of solitude, you find solace and purpose, utilizing this time for reflection, personal growth, and pursuing your passions. Far from feeling lonely, you appreciate these moments as opportunities for self-discovery and rejuvenation.',
  },
  {
    id: 4,
    title: 'Down to earth well-balanced harmonious',
    description:
      ' You appreciate simplicity and authenticity, finding beauty in the natural and uncomplicated. Your grounded nature earns your admiration, as you are known for your reliability and dependability. Those close to you find comfort and freedom in your presence, as you provide both security and space. Your warmth and humanity resonate with others, creating genuine connections and fostering harmony in relationships. You eschew ostentation and superficiality, preferring practicality and substance over flashy trends. Fashion holds little sway over you; instead, you opt for clothing that is both functional and subtly elegant. In essence, you embody a down-to-earth and well-balanced approach to life, valuing sincerity and practicality above all else.',
  },
  {
    id: 5,
    title: 'Professional pragmatic self-assured',
    description:
      'You are proactive and assertive in shaping your destiny, placing trust in your actions rather than relying solely on luck. When faced with challenges, you approach them with a pragmatic and straightforward mindset, finding practical solutions that get the job done efficiently. Your grounded perspective allows you to view daily tasks realistically, addressing them with unwavering determination and resolve. People entrust you with significant responsibilities in the workplace because they have confidence in your reliability and capability. Your strong willpower exudes self-assurance, instilling confidence in others. You are driven by a relentless pursuit of your goals, never resting until you have seen your ideas come to fruition. In essence, you embody professionalism, pragmatism, and self-assurance, commanding respect and admiration for your steadfast commitment to achieving success through your own efforts.',
  },
  {
    id: 6,
    title: 'Peaceful discreet non-aggressive',
    description:
      "You possess a serene and unassuming demeanour, effortlessly forming friendships while also cherishing your privacy and autonomy. Though sociable, you value moments of solitude to reflect on life's purpose and revel in personal enjoyment. Escaping to tranquil retreats allows you to recharge and find solace, yet you remain connected to others, not isolating yourself entirely. You maintain inner peace and harmony, embracing life's wonders and the richness it brings. In essence, you embody tranquillity, discretion, and a non-confrontational nature, finding contentment in both social interactions and moments of introspection.",
  },
  {
    id: 7,
    title: 'Analytical trustworthy self-assured ',
    description:
      'You have a keen eye for quality and durability, often noticing the hidden treasures that others overlook. You appreciate the finer things in life, surrounding yourself with these special finds. Culture holds a significant place in your life, guiding your personal style, which is refined and distinctive, untouched by fleeting trends. Your pursuit of refined enjoyment shapes your lifestyle. You place importance on the cultural interests of those you associate with, seeking connections with individuals who share your appreciation for sophistication and refinement.',
  },
  {
    id: 8,
    title: 'Romantic dreamy emotional',
    description:
      "You possess a deeply sensitive nature, valuing emotions and dreams as much as rationality and logic. You believe in embracing the richness of your feelings and intuition, refusing to solely rely on a practical outlook. For you, dreams hold significance in life, serving as inspirations and guiding lights. You reject those who dismiss romanticism and prioritize rationality, recognizing the importance of nurturing both the heart and mind. You are unapologetic in expressing the diverse range of your emotions, refusing to be confined by societal norms or expectations. Instead, you celebrate the beauty of human sentiment and the depth of emotional experiences, finding meaning and fulfillment in the richness of life's tapestry.",
  },
  {
    id: 9,
    title: 'Dynamic active extroverted',
    description:
      "You thrive on excitement and variety, readily embracing challenges and making bold commitments for engaging opportunities. Routine feels stifling to you, as you prefer the thrill of dynamic experiences.Your enthusiasm lies in actively participating and contributing to events and situations. You possess a strong sense of initiative, eagerly taking charge and making things happen. In your pursuit of active involvement, you're willing to take calculated risks, seeking out endeavours that offer stimulation and fulfilment. Your vibrant energy and proactive approach make you a valuable asset in any setting, driving progress and innovation.",
  },
]

module.exports = function (pdfData) {
  const details = personalityTypes.find(
    personalityType => personalityType.title === pdfData.personality
  )

  return `PERSONALITY TYPE

  ${details.title}

  ${details.description}
  `
}
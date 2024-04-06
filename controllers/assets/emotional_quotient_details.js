const details = [
  {
    minScoreLimit: 15,
    maxScoreLimit: 34,
    description:
      "Your emotional intelligence could use some development. It seems that managing your emotions, particularly during stressful situations, may be challenging for you. You might find yourself overwhelmed by strong emotions or tend to avoid conflicts to prevent distress. Additionally, calming down after experiencing upsetting emotions and building strong relationships with others may be areas that require attention. However, don't worry—there are various strategies and techniques you can learn to enhance your emotional intelligence starting today. Consider:",
    points: [
      'Engaging in mindfulness or relaxation techniques to manage stress and regulate emotions.',
      'Practicing assertiveness and conflict resolution skills to address difficult situations constructively.',
      'Seeking feedback from trusted individuals to gain insight into areas for improvement.',
      "Investing time in building empathy and understanding others' perspectives to strengthen relationships.",
    ],
  },
  {
    minScoreLimit: 35,
    maxScoreLimit: 55,
    description:
      "Your emotional intelligence is at an average level. While you likely maintain good relationships with some of your colleagues, you may encounter difficulties in working with others. There's room for improvement in enhancing your working relationships significantly. By focusing on understanding and managing your emotions better, as well as improving your communication and interpersonal skills, you can elevate your emotional intelligence to strengthen your professional connections and collaborations. Consider:",
    points: [
      'Participating in emotional intelligence workshops or training programs to develop self-awareness and interpersonal skills.',
      'Practicing active listening and empathy to foster better understanding and communication with colleagues.',
      'Setting goals for improving specific aspects of emotional intelligence and tracking your progress over time.',
      'Seeking mentorship or coaching from individuals with strong emotional intelligence to learn effective strategies and techniques.',
    ],
  },
  {
    minScoreLimit: 56,
    maxScoreLimit: 75,
    description:
      "Congratulations! You possess a high level of emotional intelligence. Your ability to understand and manage emotions effectively enables you to maintain great relationships, and people likely turn to you for guidance and support. However, it's essential to recognize that even with your strong people skills, there's always room for growth. While you excel in interpersonal interactions, remember to prioritize your own needs and well-being. Additionally, consider leveraging your emotional intelligence for leadership roles, as research suggests that emotionally intelligent individuals often exhibit excellent leadership potential. Continuously seek opportunities to refine and expand your emotional intelligence further to unlock your full leadership capabilities. Consider:",
    points: [
      'Mentoring others to share your knowledge and skills in emotional intelligence.',
      'Engaging in reflective practices to deepen self-awareness and identify areas for continued growth.',
      'Seeking leadership opportunities where you can apply your emotional intelligence to inspire and motivate others.',
      'Continuing education and professional development to stay updated on the latest trends and research in emotional intelligence.',
    ],
  },
]

module.exports = function (pdfData) {
  const score = pdfData.emotionalIntelligence

  const level = details.find(detail => {
    return score >= detail.minScoreLimit && score <= detail.maxScoreLimit
  })

  const points = level.points.map(point => `• ${point}`).join('\n')

  return `EMOTIONAL QUOTIENT

Your emotional intelligence score: ${score}

${level.description}

Consider:
${points}
`
}

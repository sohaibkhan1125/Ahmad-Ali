import React, { useState } from 'react';
import SEO from './SEO';

const AICaptionGenerator = () => {
    const [description, setDescription] = useState('');
    const [platform, setPlatform] = useState('Instagram');
    const [tone, setTone] = useState('Casual');
    const [loading, setLoading] = useState(false);
    const [captions, setCaptions] = useState([]);

    const platforms = ['Instagram', 'Facebook', 'YouTube', 'TikTok'];
    const tones = ['Professional', 'Casual', 'Funny', 'Motivational'];

    const templates = {
        Instagram: {
            Professional: [
                "Elevate your perspective. {description}. 📈 #Business #Success #Growth",
                "Quality over everything. {description}. 💼 #Pro #InstagramBusiness #Work",
                "Consistency is key. {description}. 🚀 #LifeGoals #Professional #Focus",
                "Deep dive into {description}. Let's talk about it. 💬 #Strategy #Insights #Mindset",
                "The process behind {description}. Real growth happens here. ✨ #BehindTheScenes #WorkLife #Goals"
            ],
            Casual: [
                "Just another day with {description}. ✨ #Vibes #Classic #Default",
                "Life's better when {description}. 🌈 #HappyDays #LivingLife #Weekend",
                "Keep it simple: {description}. ✌️ #SimpleLife #Mood #IgDaily",
                "Weekend plans: {description}. What about you? ☕ #Relax #Chill #GoodVibes",
                "Finding joy in {description}. 🌻 #SmallMoments #Gratitude #Mood"
            ],
            Funny: [
                "I'm not lazy, I'm just on power-save mode while {description}. 😂 #Funny #Relatable #Mood",
                "Trying to look cool while {description}. Did it work? 🤡 #MainCharacterEnergy #Help #Lol",
                "Expectation vs. Reality: {description}. 💀 #Life #FunnyPost #Oops",
                "If only {description} counted as cardio. 🍔 #Foodie #LazySaturday #Relatable",
                "My 3 moods: coffee, sleeping, and {description}. ☕ #SendHelp #FunnyVibes"
            ],
            Motivational: [
                "Dream big. {description}. 🚀 #Motivation #Mindset #Believe",
                "Your only limit is you. {description}. ⚡ #KeepGoing #Inspiration #FullPower",
                "Small steps every day. {description}. 🌱 #Growth #Discipline #Success",
                "Turn your 'can'ts' into 'cans'. {description}. 🔥 #NoExcuses #StayStrong #Victory",
                "Believe in the magic of {description}. ✨ #Dreamer #StayPositive #LifeLessons"
            ]
        },
        Facebook: {
            Professional: [
                "Industry insights: {description}. How is your team handling this? 🤝 #Networking #Corporate #Success",
                "Focusing on the strategy of {description} today. 💼 #BusinessGrowth #Leadership #Strategy",
                "A closer look at {description}. This could change everything. 🔗 #Innovation #Tech #Future",
                "The value of {description} in today's market. 📈 #MarketTrends #Professionalism #Growth",
                "Collaborating on {description}. Great results ahead! 🚀 #Teamwork #Milestone #Business"
            ],
            Casual: [
                "Enjoying some time with {description}. Hope you're all having a great day! 😊 #FamilyTime #Friends #Life",
                "Thinking about {description} today. Any recommendations? 💬 #Community #Question #DailyLife",
                "So glad I finally got to focus on {description}. It's the little things! ☕ #Gratitude #WeekendVibes #Home",
                "Current mood: {description}. What's on your mind? ✨ #Casual #Connect #Update",
                "Throwback to {description}. Good times! 📸 #Memories #TBT #LifeJourney"
            ],
            Funny: [
                "Current status: {description}. Don't check on me, I'm fine. 😂 #LifeUpdate #Funny #MondayMotivation",
                "Who else can relate to {description}? Just Me? 🙋‍♂️ #FunnyMoments #StoryOfMyLife #Lol",
                "Why is {description} so difficult for no reason? 💀 #TheStruggle #Adulting #Funny",
                "I followed my heart and it led me to {description}. ❤️🍟 #RelationshipGoals #Funny #Relatable",
                "Doing {description} like a pro. (The 'pro' stands for procrastinating). 🤡 #Procrastination #Mood #FunnyPost"
            ],
            Motivational: [
                "Success is a journey, not a destination. {description}. 🔥 #Mindset #Victory #Progress",
                "Grateful for the lessons learned while {description}. 🙏 #Inspiration #PersonalGrowth #Believe",
                "Keep pushing forward. {description}. Your breakthrough is coming. 🌊 #Persistence #Hope #Stronger",
                "Start where you are. Use what you have. {description}. ✨ #Motivation #StartNow #DreamBig",
                "Every day is a second chance. {description}. Make it count! ⏳ #Inspirational #NewDay #Focus"
            ]
        },
        YouTube: {
            Professional: [
                "In this video, we dive deep into {description}. Watch now for the full breakdown! 🎥 #Tutorial #Education #Expert",
                "Mastering the art of {description}. Here's my step-by-step guide. 📚 #Guide #Learning #ProTips",
                "The truth about {description}. What you need to know. ⚠️ #Expose #IndustryInsights #Business",
                "How I managed {description} to achieve 10x growth. 📈 #Marketing #CaseStudy #Success",
                "Top 5 secrets of {description} revealed! 🔓 #Secrets #TipsAndTricks #GrowthHacking"
            ],
            Casual: [
                "Vlog day! Come with me while I explore {description}. 🤳 #Vlog #DailyLife #Travel",
                "Just a quick update on {description}. Hope you enjoy the video! ✨ #Update #LifeStory #ChitChat",
                "I tried {description} for a week. Here's what happened... 😱 #Challenge #Experience #Storytime",
                "Unboxing and first impressions of {description}. 📦 #Unboxing #Tech #Review",
                "Q&A session: Talking about {description} and more! 💬 #AskMeAnything #Community #Connect"
            ],
            Funny: [
                "I should NOT have done this: {description}. 😂💀 #ContentGold #Fail #FunnyVideo",
                "Reacting to {description}. This got weird... 🤡 #Reaction #Funny #InternetCulture",
                "Expectation vs reality of {description}. 🤣 #Comedy #Relatable #TikTikStyle",
                "Doing {description} but I have no idea what I'm doing. 🤡 #Help #Newbie #Funny",
                "10 types of people doing {description}. Which one are you? 🎭 #Characters #ComedySkitch #Funny"
            ],
            Motivational: [
                "Why you should start {description} today. 🌟 #ChangeYourLife #Believe #Action",
                "The mindset you need for {description}. 🔥 #MentalStrength #Winner #Focus",
                "Overcoming the fear of {description}. You can do it! 💪 #Courage #Fearless #Success",
                "My journey from zero to {description}. 📈 #Inspiration #MyStory #Transformation",
                "Don't let anyone tell you {description} is impossible. 🚀 #Dream #Achieve #Motivation"
            ]
        },
        TikTok: {
            Professional: [
                "Pov: You finally mastered {description}. 💼 #CareerTips #WorkHacks #CorporateLife",
                "Stop scrolling if you want to know about {description}. 📈 #BusinessTips #Marketing #Success",
                "3 things I wish I knew about {description} sooner. 💡 #Advice #Grow #Professional",
                "How to land your dream job by {description}. 🎯 #CareerAdvice #InterviewTips #Jobs",
                "Small business check: {description} edition. ✨ #SmallBusiness #Founder #Entrepreneur"
            ],
            Casual: [
                "Day in my life: {description} edition. ✨ #Vlog #Lifestyle #DayInMyLife",
                "Tell me you like {description} without actually telling me... ☕ #Relatable #Mood #Fyp",
                "If you're seeing this, you needed {description}. 🌈 #Signs #Universe #GoodVibes",
                "Current obsession: {description}. 😍 #Obsessed #Favoritethings #Review",
                "Spend the morning with me {description}. ☀️ #MorningRoutine #Aesthetic #Chill"
            ],
            Funny: [
                "Tell me a joke... {description}. 😂 #Humor #Lol #TikTikFunny",
                "I was today years old when I found out {description}. 🤡 #Fact #Shocking #Relatable",
                "When you try {description} for the first time... 💀 #Fail #Funny #Experience",
                "Nobody: ... Me: {description}. 🤣 #Nobody #FunnyMemes #Viral",
                "My bank account watching me {description}: 👁️👄👁️ #Shopping #Funny #Broke"
            ],
            Motivational: [
                "This is your sign to start {description}. ✨ #Motivation #StartToday #Goals",
                "Reminder: You are capable of {description}. 🔥 #Encouragement #SelfLove #Strong",
                "Manifesting {description} for everyone watching. 🕯️ #Manifestation #Believe #HighVibes",
                "Hard work pays off: {description}. 💪 #Transformation #SuccessStory #WorkHard",
                "Don't quit. {description}. 🚀 #Persistence #KeepGoing #InnerPeace"
            ]
        }
    };

    const handleGenerate = () => {
        if (!description.trim()) return;

        setLoading(true);
        setCaptions([]);

        // Simulate "AI" thinking
        setTimeout(() => {
            const selectedTemplates = templates[platform][tone];
            const generated = selectedTemplates.map(template =>
                template.replace('{description}', description.trim())
            );

            // Randomize order slightly
            setCaptions(generated.sort(() => Math.random() - 0.5));
            setLoading(false);

            // Scroll to results
            setTimeout(() => {
                const element = document.getElementById('caption-results');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }, 1500);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        // You could add a toast notification here if available
        alert('Caption copied to clipboard!');
    };

    return (
        <div className="min-h-screen">
            <SEO
                title="AI Caption Generator - Smart Social Media Captions"
                description="Generate engaging captions for social media posts in seconds with AI — no login required. Perfect for Instagram, Facebook, and TikTok."
                keywords="ai caption generator, instagram caption generator, social media captions, facebook caption generator, tiktok caption generator, ai writing tool"
            />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            AI Caption Generator
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                            Generate engaging captions for social media posts in seconds — no login required.
                        </p>
                    </div>

                    {/* Tool Interface */}
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="p-6 sm:p-10 space-y-8">
                            {/* Description Input */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                    Describe your post
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Example: A travel photo from Dubai at night"
                                    className="w-full h-32 px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 resize-none text-gray-900"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Platform Selector */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Platform
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {platforms.map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => setPlatform(p)}
                                                className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${platform === p
                                                    ? 'bg-purple-600 text-white shadow-lg scale-[1.02]'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Tone Selector */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                                        Tone
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {tones.map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setTone(t)}
                                                className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${tone === t
                                                    ? 'bg-pink-600 text-white shadow-lg scale-[1.02]'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Generate Button */}
                            <button
                                onClick={handleGenerate}
                                disabled={!description.trim() || loading}
                                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${!description.trim() || loading
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-[1.01]'
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Generating Captions...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span>Generate Captions</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section id="caption-results" className="py-16 bg-white min-h-[200px]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {captions.length > 0 && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-gray-900">Your Captions Are Ready!</h2>
                                <p className="text-gray-600 mt-2">Choose the one that fits your post best</p>
                            </div>

                            <div className="grid gap-6">
                                {captions.map((caption, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <p className="text-gray-800 text-lg leading-relaxed pr-12">
                                            {caption}
                                        </p>
                                        <button
                                            onClick={() => copyToClipboard(caption)}
                                            className="absolute top-6 right-6 p-2 rounded-xl bg-white shadow-sm border border-gray-200 text-purple-600 hover:bg-purple-50 transition-all duration-200"
                                            title="Copy to clipboard"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {loading && !captions.length && (
                        <div className="flex flex-col items-center justify-center py-12 space-y-4">
                            <div className="w-16 h-16 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
                            <p className="text-gray-500 font-medium animate-pulse">Our AI is crafting your captions...</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AICaptionGenerator;

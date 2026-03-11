import { Link } from 'react-router-dom';
import { Shield, Smartphone, Bell, Activity, ArrowRight, CheckCircle2, Lock, Eye } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#0b0f19] text-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-8 font-medium shadow-[0_0_15px_rgba(59,130,246,0.15)] mx-auto">
                        <Shield size={16} /> The #1 Rated Parental Control Platform
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        Protect Your Child's <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-400 drop-shadow-lg inline-block animate-float">
                            Digital Footprint
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed font-medium">
                        Advanced monitoring, intelligent alerts, and comprehensive screen time analytics. Keep your children safe in the digital world without invading their privacy.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5 items-center">
                        <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all transform hover:-translate-y-1 gap-2 border border-blue-400/30 w-full sm:w-auto">
                            Start Free Trial <ArrowRight size={20} />
                        </Link>
                        <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-gray-300 bg-[#1e293b]/50 border border-gray-700 hover:bg-[#1e293b] hover:text-white transition-all backdrop-blur-md hover:border-gray-500 w-full sm:w-auto">
                            Parent Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-[#0f172a]/50 border-y border-gray-800/60 relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPjwvc3ZnPg==')] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-base text-blue-400 font-bold tracking-wide uppercase mb-3">Military-Grade Features</h2>
                        <p className="text-4xl font-extrabold text-white">Everything you need to monitor safely.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden glass-panel-hover glass-panel">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-10">
                                <Activity className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Activity Logging</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                See exactly which apps are being used and websites visited in real-time. Detailed timeline history available.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl hover:border-teal-500/50 transition-all duration-500 group relative overflow-hidden glass-panel-hover glass-panel">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-teal-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] transition-all duration-300 relative z-10">
                                <Bell className="h-8 w-8 text-teal-400 group-hover:text-teal-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Intelligent Alerts</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                Receive instant push notifications if inappropriate content, vulgar language, or restricted sites are accessed.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-gray-700/50 p-10 rounded-3xl hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden glass-panel-hover glass-panel">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 relative z-10">
                                <Smartphone className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Screen Time Rules</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                Analyze daily device usage and establish healthy boundaries with automated screen time tracking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it Works / Trust Section */}
            <div className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-t-[3rem] p-12 lg:p-20 border border-gray-800 shadow-2xl relative">
                        {/* Decorative background elements inside card */}
                        <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-[3rem] pointer-events-none">
                            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                            <div>
                                <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">Bank-level security for your family's data.</h2>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    We believe that protecting your children shouldn't mean compromising their personal data to third parties. SafeChild uses end-to-end encryption.
                                </p>
                                <ul className="space-y-5">
                                    {[
                                        'AES-256 Bit Encryption for all logs',
                                        'Strict No-Sell Data Policy',
                                        '100% Anonymous Child Profiles',
                                        'SOC-2 Compliant Server Infrastructure'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-300 font-medium whitespace-nowrap">
                                            <div className="p-1 rounded-full bg-teal-500/20 text-teal-400">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative animate-float">
                                {/* Abstract representation of security */}
                                <div className="aspect-square rounded-3xl bg-[#0b0f19] border border-gray-800 p-8 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-3xl mix-blend-overlay"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5"></div>
                                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pattern-grid">
                                        <div className="absolute w-64 h-64 bg-teal-500/10 rounded-full blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse-slow"></div>
                                        <div className="w-32 h-32 rounded-full border border-blue-500/40 flex items-center justify-center animate-[spin_10s_linear_infinite] shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                            <div className="w-24 h-24 rounded-full border border-teal-500/60 flex items-center justify-center animate-[spin_8s_linear_infinite_reverse] bg-gradient-to-br from-[#0b0f19] to-gray-900 shadow-inner">
                                                <Lock className="text-teal-300 h-10 w-10 animate-none drop-shadow-[0_0_10px_rgba(20,184,166,0.6)]" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating elements */}
                                    <div className="absolute -left-6 top-1/4 bg-[#1e293b]/90 backdrop-blur-md p-4 rounded-xl border border-gray-600/50 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hidden md:flex items-center gap-3 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                                        <Eye className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" size={24} />
                                        <div className="flex flex-col gap-1.5">
                                            <div className="h-2 w-16 bg-blue-500/50 rounded-full"></div>
                                            <div className="h-2 w-10 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="absolute -right-6 bottom-1/4 bg-[#1e293b]/90 backdrop-blur-md p-4 rounded-xl border border-gray-600/50 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hidden md:flex items-center gap-3 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: '1s' }}>
                                        <Shield className="text-teal-400 drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" size={24} />
                                        <div className="flex flex-col gap-1.5">
                                            <div className="h-2 w-14 bg-teal-500/50 rounded-full"></div>
                                            <div className="h-2 w-12 bg-gray-600 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

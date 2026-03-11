import { useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { AlertOctagon, Check, AlertTriangle, EyeOff, PhoneIncoming, MessageSquareX, ShieldAlert } from 'lucide-react';

const Alerts = () => {
    const { user } = useAuth();
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const res = await api.get(`/alerts/${user._id}`);
                setAlerts(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAlerts();
    }, [user._id]);

    const markAsRead = async (id) => {
        try {
            await api.put(`/alerts/${id}/read`);
            setAlerts(alerts.map(a => a._id === id ? { ...a, isRead: true } : a));
        } catch (err) {
            console.error(err);
        }
    };

    const getAlertIcon = (type) => {
        switch (type) {
            case 'adult_content': return <EyeOff className="h-6 w-6 text-rose-500" />;
            case 'excessive_screen_time': return <AlertTriangle className="h-6 w-6 text-amber-500" />;
            case 'unknown_call': return <PhoneIncoming className="h-6 w-6 text-orange-500" />;
            case 'vulgar_language': return <MessageSquareX className="h-6 w-6 text-purple-500" />;
            default: return <AlertOctagon className="h-6 w-6 text-gray-400" />;
        }
    };

    const getAlertColor = (type) => {
        switch (type) {
            case 'adult_content': return 'border-rose-500/30 bg-rose-500/5 hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]';
            case 'excessive_screen_time': return 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]';
            case 'unknown_call': return 'border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]';
            case 'vulgar_language': return 'border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]';
            default: return 'border-gray-500/30 bg-gray-500/5 hover:border-gray-500/50';
        }
    };

    if (loading) return (
        <div className="flex justify-center flex-col items-center min-h-[60vh] opacity-70">
            <ShieldAlert size={48} className="text-gray-500 animate-pulse mb-4" />
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-1/2 animate-[progress_1s_ease-in-out_infinite]"></div>
            </div>
            <style>{`@keyframes progress { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }`}</style>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-8 mt-4 relative">
                <div className="absolute top-0 right-10 w-64 h-32 bg-rose-500/10 rounded-full blur-3xl transform -translate-y-1/2 pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                            <ShieldAlert className="h-7 w-7 text-rose-400" />
                        </div>
                        Security Alerts
                    </h2>
                    <p className="text-gray-400 font-medium">Critical system notifications and content policy violations.</p>
                </div>
                <div className="text-sm font-bold bg-rose-500/10 text-rose-400 px-4 py-2 rounded-full border border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)] relative z-10">
                    <span className="animate-pulse mr-1.5 inline-block w-2 h-2 bg-rose-500 rounded-full"></span>
                    {alerts.filter(a => !a.isRead).length} Unread Actions
                </div>
            </div>

            <div className="space-y-4">
                {alerts.length > 0 ? (
                    alerts.map(alert => (
                        <div
                            key={alert._id}
                            className={`flex items-start justify-between p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${alert.isRead
                                ? 'bg-[#0f172a]/50 border-gray-800/80 opacity-70 grayscale-[30%] hover:opacity-100 hover:grayscale-0'
                                : `backdrop-blur-xl ${getAlertColor(alert.alertType)}`
                                }`}
                        >
                            {!alert.isRead && <div className="absolute left-0 top-0 w-1 h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,1)]"></div>}

                            <div className="flex gap-5 relative z-10 w-full">
                                <div className={`mt-1 p-3 rounded-xl flex-shrink-0 ${alert.isRead ? 'bg-gray-800 border border-gray-700' : 'bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform'}`}>
                                    {getAlertIcon(alert.alertType)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h4 className={`font-bold text-lg capitalize tracking-tight flex items-center gap-3 ${alert.isRead ? 'text-gray-400' : 'text-white'}`}>
                                                {alert.alertType.replace(/_/g, ' ')}
                                                {alert.childId && (
                                                    <span className="text-xs font-semibold text-gray-300 bg-[#1e293b] px-2.5 py-1 rounded-md border border-gray-700 uppercase tracking-wider flex items-center gap-1">
                                                        <MonitorSmartphone size={12} /> {alert.childId.name}
                                                    </span>
                                                )}
                                            </h4>
                                            <p className={`mt-1.5 text-[15px] leading-relaxed ${alert.isRead ? 'text-gray-500' : 'text-gray-300'}`}>
                                                {alert.message}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
                                            <Clock size={12} /> {new Date(alert.createdAt).toLocaleString(undefined, {
                                                month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 ml-4 hidden sm:block">
                                {!alert.isRead ? (
                                    <button
                                        onClick={() => markAsRead(alert._id)}
                                        className="flex items-center gap-2 text-sm font-bold text-teal-400 bg-teal-400/10 hover:bg-teal-400/20 px-5 py-2.5 rounded-xl border border-teal-400/20 transition-all hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] whitespace-nowrap"
                                        title="Mark as Resolve"
                                    >
                                        <Check size={16} strokeWidth={3} /> Resolve
                                    </button>
                                ) : (
                                    <span className="text-xs font-bold text-gray-500 bg-gray-900/80 px-4 py-2 rounded-xl border border-gray-800 flex items-center gap-1.5 whitespace-nowrap">
                                        <Check size={14} /> Resolved
                                    </span>
                                )}
                            </div>

                            {/* Mobile resolve button */}
                            {!alert.isRead && (
                                <button
                                    onClick={() => markAsRead(alert._id)}
                                    className="sm:hidden absolute top-4 right-4 p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20"
                                >
                                    <Check size={16} />
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-[#1e293b]/40 border border-gray-800 rounded-3xl glass-panel relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none"></div>
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-teal-500/10 border-2 border-teal-500/20 mb-6 shadow-[0_0_30px_rgba(20,184,166,0.15)] relative">
                            <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                            <Check className="h-10 w-10 text-teal-400 relative z-10" strokeWidth={3} />
                        </div>
                        <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">System Secure</h3>
                        <p className="text-gray-400 text-lg max-w-md mx-auto">No security alerts have been triggered. All monitors are quiet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Alerts;

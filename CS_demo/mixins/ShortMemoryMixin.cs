using System.Runtime.CompilerServices;

namespace CS_demo.mixins;

public interface IShortMemory
{
}

internal class State
{
    public ISet<string> Memory { get; set; }
}

public static class ShortMemoryMixin
{
    private static readonly ConditionalWeakTable<IShortMemory, State> states = new();

    public static void Remember(this IShortMemory instance, string id)
    {
        if (!states.TryGetValue(instance, out var state))
        {
            state = new State() { Memory = new HashSet<string>() };
            states.Add(instance, state);
        }

        state.Memory.Add(id);
    }

    public static bool DoYouRemember(this IShortMemory instance, string id)
    {
        if (!states.TryGetValue(instance, out var state))
        {
            state = new State() { Memory = new HashSet<string>() };
            states.Add(instance, state);
        }

        return state.Memory.Contains(id);
    }
}
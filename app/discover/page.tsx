"use client";

import Container from "@/components/Container";
import { generateDestinations } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import CitiesPreviewGrid from "./CitiesPreviewGrid";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (<button
        disabled={pending}
        className="bg-blue-600 text-white hover:bg-blue-500 rounded-xl px-4 py-2 mt-8 disabled:cursor-not-allowed disabled:opacity-50">
        Submit
    </button>
    );
}

export default function Discover() {
    const [state, formAction] = useFormState(generateDestinations, null);

    return (
        <div className="pb-16">
            <Container>
                <h1 className="text-4xl py-8">Discover a new destination</h1>
                <form action={formAction} className="border p-8 rounded-xl">
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <label htmlFor="days" className="block text-sm font-medium leading-6 text-gray-900">{"How many days are your traveling"}</label>
                            <div className="mt-2">
                                <input className="ring-2 ring-inset ring-gray-300 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm"
                                    name="days"
                                    id="days"
                                    type="number"
                                    placeholder="between 3 and 10"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium leading-6 text-gray-900">{"What is your max budget (in $)?"}</label>
                            <div className="mt-2">
                                <input className="ring-2 ring-inset ring-gray-300 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm"
                                    name="budget"
                                    type="number"
                                    placeholder="e.g. 500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="from" className="block text-sm font-medium leading-6 text-gray-900">{"Where are you traveling from"}</label>
                            <div className="mt-2">
                                <input
                                    className="ring-2 ring-inset ring-gray-300 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm"
                                    name="from"
                                    type="text"
                                    placeholder="e.g. Toronto"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 max-w-lg mt-8">
                        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="details">Trip Details</label>
                        <small>
                            {"In a sentence or two, describe what kind of trip you are looking for."}
                        </small>
                        <textarea
                            rows={4}
                            className="block mt-2 w-full ring-1 ring-inset ring-gray-300 border-0 px-2 py-1.5"
                            name="details"
                            id="details"
                            placeholder="e.g., I want to go on a relaxing trip"
                            required
                        />
                    </div>
                    <SubmitButton />
                </form>
                {state ? (
                    <div className="pt-8">
                        <CitiesPreviewGrid {...state} />
                    </div>) : null
                }
            </Container>
        </div>
    )
}

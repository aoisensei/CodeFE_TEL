import { ClassEvent } from '@/models/classevent'
import { FilterData } from '@/models/filter'
import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = process.env.BASE_URL + "/tel/classroom/"

export async function FetchDataClassEvent(filter: FilterData) {
    try {
        const res = await fetch(DATA_SOURCE_URL + "list-class-event", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: filter.id,
                code: filter.code,
                name: filter.name
            })
        })
        const Classevents: ClassEvent[] = await res.json()
        console.log(Classevents);
        return Classevents;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

export async function CreateClassEvent(classevent: any) {
    try {
        debugger;
        const res = await fetch(DATA_SOURCE_URL + "create-class-event", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                classroomId: classevent.classroomId,
                name: classevent.name,
                isNotification: classevent.isNotification,
                order: classevent.order,
                endAt: classevent.endAt,
            })
        });

        console.log(JSON.stringify({
            classroomId: classevent.classroomId,
            name: classevent.name,
            isNotification: classevent.isNotification,
            order: classevent.order,
            endAt: classevent.endAt,
        }))

        const newClassEvent: ClassEvent = await res.json();
        return newClassEvent; // Return the created board if successful
    } catch (error) {
        // Handle network errors or unexpected exceptions
        console.error('Error creating classevent:', error);
        return { error: 'An unexpected error occurred.' }; // Return a generic error message
    }
}

export async function UpdateClassEvent(request: Request) {
    const {
        id,
        classroomId,
        code,
        name,
        isNotification,
        description,
        order,
        createdAt,
        endAt,
        updatedAt,
        deletedAt,
        comment,
        question,
        classroom
    }: Partial<ClassEvent> = await request.json()

    const res = await fetch(DATA_SOURCE_URL + "update-class-event", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            classroomId,
            code,
            name,
            isNotification,
            description,
            order,
            createdAt,
            endAt,
            updatedAt,
            deletedAt,
            comment,
            question,
            classroom
        })
    })
    const newClassEvent: ClassEvent = await res.json()
    return newClassEvent
}

export async function DeleteClassEvent(request: Request) {
    const { id }: Partial<ClassEvent> = await request.json()

    if (!id) return NextResponse.json({ "message": "ClassEvent id required" })

    await fetch(DATA_SOURCE_URL + "delete-class-event", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    })

    return id;
}


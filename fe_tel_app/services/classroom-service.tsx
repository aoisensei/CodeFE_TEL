import { Classroom } from '@/models/classroom'
import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = process.env.BASE_URL + "/tel/classroom/"

export async function FetchData() {
    try {
        const res = await fetch(DATA_SOURCE_URL + "list", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const Classrooms: Classroom[] = await res.json()
        return Classrooms;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

export async function Create(classroom: any) {
    try {
        debugger;
        const res = await fetch(DATA_SOURCE_URL + "create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: classroom.name,
            })
        });

        console.log(JSON.stringify({
            name: classroom.name,
        }))

        const newClassroom: Classroom = await res.json();
        return newClassroom; // Return the created board if successful
    } catch (error) {
        // Handle network errors or unexpected exceptions
        console.error('Error creating classroom:', error);
        return { error: 'An unexpected error occurred.' }; // Return a generic error message
    }
}

export async function Update(request: Request) {
    const {
        id,
        code,
        name,
        description,
        createdAt,
        updatedAt,
        deletedAt,
        classEvent
    }: Partial<Classroom> = await request.json()

    const res = await fetch(DATA_SOURCE_URL + "update", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            code,
            name,
            description,
            createdAt,
            updatedAt,
            deletedAt,
            classEvent
        })
    })
    const newClassroom: Classroom = await res.json()
    return newClassroom
}

export async function Delete(request: Request) {
    const { id }: Partial<Classroom> = await request.json()

    if (!id) return NextResponse.json({ "message": "Classroom id required" })

    await fetch(DATA_SOURCE_URL + "delete", {
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


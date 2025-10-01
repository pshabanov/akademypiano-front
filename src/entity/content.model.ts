
export type ContentStringType = 'new-slug' | 'new-slug2'

export type Content = Record<ContentStringType, ContentBox>

export interface ContentBox {
    value: string
    is_active: boolean
}
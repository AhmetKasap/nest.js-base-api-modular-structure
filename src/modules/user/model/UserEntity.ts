import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PostEntity } from "src/modules/post/model/PostEntity";
import { CommentEntity } from "src/modules/comment/model/CommentEntity";
import { LikeEntity } from "src/modules/like/model/LikeEntity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column()
    name : string

    @Column()
    lastname: string

    @Column({unique : true})
    email : string

    @Column()
    password : string

    @OneToMany(() => PostEntity, (post) => post.user, { cascade: true, onDelete: 'CASCADE' })
    posts : PostEntity[]

    @OneToMany(() => CommentEntity, comment => comment.user, { cascade: true, onDelete: 'CASCADE' })
    comments: CommentEntity[]

    @OneToMany(() => LikeEntity, (like) => like.user, { cascade: true, onDelete: 'CASCADE' })
    likes : LikeEntity[]



    async toDto() : Promise<any> {
        return {
            id : this.id,
            name : this.name,
            lastname : this.lastname
        }
    }
}
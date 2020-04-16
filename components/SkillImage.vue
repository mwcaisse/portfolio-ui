<template>
    <img :src="images[imageKey]" />
</template>

<script>
    import amazonAurora from "~/img/skills/amazon-aurora.png"
    import apacheSolr from "~/img/skills/apache-solr.png"
    import bootstrap from "~/img/skills/bootstrap.svg"
    import cpp from "~/img/skills/cpp.png"
    import csharp from "~/img/skills/csharp.png"
    import css from "~/img/skills/css.png"
    import django from "~/img/skills/django.png"
    import drf from "~/img/skills/drf.png"
    import entityFramework from "~/img/skills/entity-framework.png"
    import git from "~/img/skills/git.png"
    import gradle from "~/img/skills/gradle.png"
    import html from "~/img/skills/html.png"
    import java from "~/img/skills/java.png"
    import javascript from "~/img/skills/javascript.png"
    import jenkins from "~/img/skills/jenkins.png"
    import jquery from "~/img/skills/jquery.gif"
    import knockout from "~/img/skills/knockout.png"
    import linux from "~/img/skills/linux.png"
    import maven from "~/img/skills/maven.png"
    import mssql from "~/img/skills/mssql.jpg"
    import mybatis from "~/img/skills/mybatis.png"
    import mysql from "~/img/skills/mysql.png"
    import oracle from "~/img/skills/oracle.png"
    import python from "~/img/skills/python.png"
    import sharepoint from "~/img/skills/sharepoint.png"
    import springFramework from "~/img/skills/spring-framework.png"
    import sql from "~/img/skills/sql.jpg"
    import ssrs from "~/img/skills/ssrs.png"
    import svn from "~/img/skills/svn.png"
    import tfs from "~/img/skills/tfs.png"
    import vue from "~/img/skills/vue.png"

    export default {
        props: {
            imageKey: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                images: {
                    amazonAurora,
                    apacheSolr,
                    bootstrap,
                    cpp,
                    csharp,
                    css,
                    django,
                    drf,
                    entityFramework,
                    git,
                    gradle,
                    html,
                    java,
                    javascript,
                    jenkins,
                    jquery,
                    knockout,
                    linux,
                    maven,
                    mssql,
                    mybatis,
                    mysql,
                    oracle,
                    python,
                    sharepoint,
                    springFramework,
                    sql,
                    ssrs,
                    svn,
                    tfs,
                    vue
                }
            }
        }
    }


</script>

<style scoped>
    img {
        width: 64px;
    }
</style>
